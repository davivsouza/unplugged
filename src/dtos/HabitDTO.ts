export type HabitDTO = {
  id?: number
  userId?: string
  name: string
  color: string
  description: string
  daysOfWeek?: number[]
  completed?: boolean
  createdAt?: Date
  habitsSchedule?: HabitsSchedule[]
}

type HabitsSchedule = {
  id: number
  habitId: number
  dayOfWeek: number
}