'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from './ListItem'
import { useEffect, useState } from 'react'
import { Task } from '@/@types/Task'
import { useMode } from '@/providers/ModeProvider'

export default function ScrollList() {
  const { data } = useMode()
  const [tasks, setTasks] = useState<Task[]>()

  useEffect(() => {
    getAllTasks()
  }, [tasks])

  async function getAllTasks() {
    const tasks = await data.getAllTasks()
    setTasks([...tasks])
  }
  
  return (
    <ScrollArea className='max-h-[400px]'>
      {tasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ScrollArea>
  )
}