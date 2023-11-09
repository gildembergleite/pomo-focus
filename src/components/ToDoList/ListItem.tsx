'use client'
import { Task } from '@/@types/Task'
import { Checkbox } from '@/components/ui/checkbox'
import { ModeContext } from '@/providers/ModeProvider'
import { useContext } from 'react'

interface ListItemProps {
  task: Task
}

export default function ListItem({ task }: ListItemProps) {
  const { data } = useContext(ModeContext)
  async function handleMarkTaskAsCompleted(taskId: string) {
    await data.markTaskAsCompleted(taskId)
  }

  return (
    <div className='flex h-full items-center gap-2 mb-4'>
      <Checkbox
        onClick={() => handleMarkTaskAsCompleted(task.id)}
        checked={task.isCompleted} />
      <p className='text-zinc-500 font-medium'>{task.description}</p>
    </div>
  )
}