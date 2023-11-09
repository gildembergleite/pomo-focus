'use client'
import TaskService from '@/services/TaskServices'
import { ReactNode, createContext, useContext } from 'react'

export interface ModeContextProps {
  data: TaskService
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

  return (
    <ModeContext.Provider value={{ data }}>
      {children}
    </ModeContext.Provider>
  )
}
