import { createContext, useEffect, useState } from "react";
import { HabitDTO } from "../dtos/HabitDTO";
import { api } from "../services/api";
import { useAuth } from "@hooks/useAuth";

export type GoalsContextData = {
  goals: HabitDTO[]
  loadTodayHabits: () => void
}
type GoalsProviderProps = {
  children: React.ReactNode
}
export const GoalsContext = createContext<GoalsContextData>({} as GoalsContextData)

export function GoalsContextProvider({ children }: GoalsProviderProps) {
  const [goals, setGoals] = useState<HabitDTO[]>([])
  const { user } = useAuth()




  async function loadTodayHabits() {
    const { data } = await api.get(`/habits/today/${user.id}`)
    setGoals(data)
  }

  useEffect(() => {
    loadTodayHabits()
  }, [])

  return (
    <GoalsContext.Provider value={{
      goals,
      loadTodayHabits,
    }}>

      {children}
    </GoalsContext.Provider>
  )
}