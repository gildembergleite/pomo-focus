'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from './ListItem'
import { useContext, useEffect, useState } from 'react'
import { Task } from '@/@types/Task'
import { ModeContext } from '@/providers/ModeProvider'

export default function ScrollList() {
  const { data } = useContext(ModeContext)
  const [tasks, setTasks] = useState<Task[]>()

  useEffect(() => {
    getAllTasks()
  }, [tasks])

  async function getAllTasks() {
    const tasks = await data.getAllTasks()
    setTasks([...tasks])
  }
  
  return (
    <ScrollArea>
      {tasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ScrollArea>
  )
}