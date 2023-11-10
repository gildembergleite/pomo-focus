'use client'
import TaskService from '@/services/TaskServices'
import { ReactNode, createContext } from 'react'

export interface ModeContextProps {
  data: TaskService
}

export const ModeContext = createContext({} as ModeContextProps)

export function ModeProvider({ children }: { children: ReactNode }) {
  const data = new TaskService()

  return (
    <ModeContext.Provider value={{ data }}>
      {children}
    </ModeContext.Provider>
  )
}
