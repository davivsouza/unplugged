import { createContext } from "react";
import * as Notifications from 'expo-notifications'
import { Alert } from "react-native";

type NotificationContextData = {
  handleCallNotification: () => Promise<void>
}
type NotificationProviderProps = {
  children: React.ReactNode
}


export const NotificationContext = createContext<NotificationContextData>({} as NotificationContextData)


export function NotificationContextProvider({ children }: NotificationProviderProps) {

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldShowAlert: true,
      shouldSetBadge: false
    })
  })

  async function handleCallNotification() {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Você não deixou as notificações')
    }
    console.log('Notificação ON');

  }

  return (
    <NotificationContext.Provider value={{
      handleCallNotification
    }}>
      {children}
    </NotificationContext.Provider>
  )
}