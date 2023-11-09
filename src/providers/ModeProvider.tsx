'use client'
import { Mode } from '@/@types/Mode'
import TaskService from '@/services/TaskServices'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface ModeProps {
  mode: 'awaiting' | 'focus' | 'shortPause' | 'longPause'
}

export interface ModeContextProps {
  data: TaskService
  mode: Mode
  changeMode: (newMode: ModeProps) => void
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
  const [mode, setMode] = useState<ModeProps>({ mode: 'shortPause' })

  function changeMode(newMode: ModeProps) {
    setMode(newMode)
  }

  return (
    <ModeContext.Provider value={{ data, mode, changeMode }}>
      {children}
    </ModeContext.Provider>
  )
}
