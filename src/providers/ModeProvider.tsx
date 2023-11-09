'use client'
import { Mode } from '@/@types/Mode'
import { awaitingMode, focusMode, longPauseMode, shortPauseMode } from '@/lib/ModeWithDurations'
import TaskService from '@/services/TaskServices'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface ModeContextProps {
  data: TaskService
  currentMode: Mode
  nextMode: Mode
  changeMode: () => void
}

export const ModeContext = createContext({} as ModeContextProps)

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const data = new TaskService()
  const [currentMode, setCurrentMode] = useState<Mode>(awaitingMode)
  const [nextMode, setNextMode] = useState<Mode>(focusMode)
  const [countCycles, setCountCycles] = useState(0)

  function changeMode() {
    if (countCycles === 0 || countCycles === 2 || countCycles === 4 || countCycles === 6) {
      setCurrentMode(focusMode)
      setNextMode(shortPauseMode)
      setCountCycles((state) => state + 1)
      console.log(countCycles)
    } else if (countCycles === 1 || countCycles === 3 || countCycles === 5 || countCycles === 7) {
      setCurrentMode(shortPauseMode)
      setNextMode(focusMode)
      setCountCycles((state) => state + 1)
      console.log(countCycles)
    } else {
      setCurrentMode(longPauseMode)
      setNextMode(focusMode)
      setCountCycles(0)
      console.log(countCycles)
    }
  }

  return (
    <ModeContext.Provider value={{ data, currentMode, nextMode, changeMode }}>
      {children}
    </ModeContext.Provider>
  )
}
