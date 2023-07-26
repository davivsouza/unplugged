import { createContext, useState } from "react";
import { TimerControlDTO } from "../dtos/TimerControlDTO";
import TikTokIcon from '@assets/habits/tiktok-icon.svg'

type TimerControlContextData = {
  timers: TimerControlDTO[]
}

export const TimerControlContext = createContext<TimerControlContextData>({} as TimerControlContextData)


type TimerControlProviderProps = {
  children: React.ReactNode
}

export function TimerControlProvider({ children }: TimerControlProviderProps) {
  const [timers, setTimers] = useState<TimerControlDTO[]>([
    {
      appName: 'Tik Tok',
      limitTime: 1800,
      iconURL: TikTokIcon
    }
  ])

  return (
    <TimerControlContext.Provider value={{ timers }}>
      {children}
    </TimerControlContext.Provider>
  )
}