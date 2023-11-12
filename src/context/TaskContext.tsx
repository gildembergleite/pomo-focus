'use client'
import { ReactNode, createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Task } from '@/@types/Task'

export interface TasksContextProps {
  tasks: Task[]
  addNewTask: (taskDescription: string) => void
  markTaskAsCompleted: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

export const TasksContext = createContext({} as TasksContextProps)

export function TasksProvider({ children }: { children: ReactNode }) {

  const [tasks, setTasks] = useState<Task[]>([])

  function addNewTask(taskDescription: string) {
    const newTask: Task = {
      id: uuid(),
      description: taskDescription,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  function markTaskAsCompleted(taskId: string) {
    const index = tasks.findIndex((task) => task.id === taskId)
    const newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks([...newTasks])
  }

  function deleteTask(taskId: string) {
    const index = tasks.findIndex((task) => task.id === taskId)
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks([...newTasks])
  }

  return (
    <TasksContext.Provider value={{ tasks, addNewTask, deleteTask, markTaskAsCompleted }}>
      {children}
    </TasksContext.Provider>
  )
}


