import { createContext, useEffect, useState } from "react";

import { timerControlGetApps, timerControlSaveStorageRemove, timerControlStorageSave } from "../storage/storageTimerControl";


export type AppTimer = {
  appName: string
  limitTime: number
  iconUrl: string
}
type TimerControlContextData = {
  timers: AppTimer[]
  saveAppTimer: ({ appName, limitTime }: AppTimer) => void
}

type TimerControlProviderProps = {
  children: React.ReactNode
}

export const TimerControlContext = createContext<TimerControlContextData>({} as TimerControlContextData)
export function TimerControlProvider({ children }: TimerControlProviderProps) {
  const [timers, setTimers] = useState<AppTimer[]>([])


  function saveAppTimer({ appName, iconUrl, limitTime }: AppTimer) {
    let timersList = timers
    timersList.push({ appName, iconUrl, limitTime })

    setTimers(timersList)
    timerControlStorageSave({ appName, iconUrl, limitTime })
  }

  async function loadTimers() {
    const appTimers = await timerControlGetApps()
    setTimers(appTimers);
  }

  useEffect(() => {
    loadTimers()
  }, [])
  return (
    <TimerControlContext.Provider value={{ timers, saveAppTimer }}>
      {children}
    </TimerControlContext.Provider>
  )
}