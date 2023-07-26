import { createContext, useState } from "react";
import { GoalDTO } from "../dtos/GoalDTO";

export type GoalsContextData = {
  goals: GoalDTO[]
  createGoal: (goal: GoalDTO) => void
}
type GoalsProviderProps = {
  children: React.ReactNode
}
export const GoalsContext = createContext<GoalsContextData>({} as GoalsContextData)

export function GoalsContextProvider({ children }: GoalsProviderProps) {
  const [goals, setGoals] = useState<GoalDTO[]>([
    { id: "22", title: 'Estudar', tagColor: 'purple.500' },
    { id: "13", title: 'Ler', tagColor: 'red.500' },
    { id: "33", title: 'Correr', tagColor: 'green.500' },
  ])

  function createGoal(goal: GoalDTO) {
    setGoals(prevState => [...prevState, goal])
  }
  return (
    <GoalsContext.Provider value={{
      goals,
      createGoal
    }}>

      {children}
    </GoalsContext.Provider>
  )
}