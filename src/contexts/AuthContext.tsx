import { createContext, useState, useEffect } from 'react'
import { UserDTO } from '../dtos/UserDTO';
import { userStorageGet, userStorageRemove, userStorageSave } from '../storage/userStorage';
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from '../storage/storageAuthToken';
import { api } from '../services/api';

export type AuthContextDataProps = {
  user: UserDTO;
  isLoadingUserStorageData: boolean
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};
export const AuthContext = createContext({} as AuthContextDataProps)


export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

  function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setUser(userData)
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true)

      await userStorageSave(userData)
      await storageAuthTokenSave(token)

    } catch (error) {
      throw error

    } finally {
      setIsLoadingUserStorageData(false)

    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/users/auth", { email, password });

      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token)
        userAndTokenUpdate(data.user, data.token);
      }

    } catch (error) {
      throw error;

    } finally {
      setIsLoadingUserStorageData(false)
    }
  }


  async function signOut() {
    try {
      setIsLoadingUserStorageData(true)
      setUser({} as UserDTO)
      await userStorageRemove()
      await storageAuthTokenRemove()

    } catch (error) {
      throw error

    } finally {

      setIsLoadingUserStorageData(false)
    }
  }
  async function loadUserData() {
    try {
      const userLogged = await userStorageGet();
      const token = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }



  useEffect(() => {
    loadUserData();
  }, []);


  return (
    <AuthContext.Provider value={{ user, isLoadingUserStorageData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}