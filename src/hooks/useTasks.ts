import { TasksContext } from '@/context/TaskContext'
import { useContext } from 'react'

export function useTasks() {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks must be used within a ModeProvider')
  }
  return context
}