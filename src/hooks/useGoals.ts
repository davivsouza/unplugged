import { useContext } from 'react'

import { GoalsContext } from '@contexts/GoalsContext'

export function useGoals() {
  const context = useContext(GoalsContext)
  return context
}