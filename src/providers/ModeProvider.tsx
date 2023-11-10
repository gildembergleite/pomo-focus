'use client'
import { Mode } from '@/@types/Mode'
import { Task } from '@/@types/Task'
import { awaitingMode, focusMode, longPauseMode, shortPauseMode } from '@/lib/ModeWithDurations'
import TaskService from '@/services/TaskServices'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface ModeContextProps {
  data: TaskService
  currentMode: Mode
  nextMode: Mode
  tasks: Task[]
  changeMode: () => void
  addNewTask: (taskDescription: string) => void
}

export const ModeContext = createContext({} as ModeContextProps)

export function ModeProvider({ children }: { children: ReactNode }) {
  const data = new TaskService()
  const [currentMode, setCurrentMode] = useState<Mode>(awaitingMode)
  const [nextMode, setNextMode] = useState<Mode>(focusMode)
  const [countCycles, setCountCycles] = useState<number>(0)
  const [tasks, setTasks] = useState<Task[]>(data.tasks)

  async function getTasks() {
    const tasks = await data.getAllTasks()
    setTasks(tasks)
  }

  function setModeConfig(currentMode: Mode, nextMode: Mode) {
    setCurrentMode(currentMode)
    setNextMode(nextMode)
    if (countCycles < 7) {
      setCountCycles((state) => state + 1)
    } else {
      setCountCycles(0)
    }
  }

  function changeMode() {
    if (countCycles === 0 || countCycles === 2 || countCycles === 4) {
      setModeConfig(focusMode, shortPauseMode)
    } else if (countCycles === 1 || countCycles === 3 || countCycles === 5) {
      setModeConfig(shortPauseMode, focusMode)
    } else if (countCycles === 6) {
      setModeConfig(focusMode, longPauseMode)
    } else {
      setModeConfig(longPauseMode, focusMode)
    }
  }

  async function addNewTask(taskDescription: string) {
    await data.addNewTask(taskDescription)
    await getTasks()
  }

  return (
    <ModeContext.Provider value={{ data, currentMode, nextMode, changeMode, addNewTask, tasks }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}
