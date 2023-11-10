'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from './ListItem'
import { useEffect, useState } from 'react'
import { Task } from '@/@types/Task'
import { useMode } from '@/providers/ModeProvider'

export default function ScrollList() {
  const { tasks } = useMode()
  const [taskList, setTasksList] = useState<Task[]>([])

  useEffect(() => {
    getTasks()
  }, [tasks])

  async function getTasks() {
    setTasksList(tasks)
  }
  
  return (
    <ScrollArea className='max-h-[400px]'>
      {taskList.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ScrollArea>
  )
}
