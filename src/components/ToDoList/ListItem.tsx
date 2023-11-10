'use client'
import { Task } from '@/@types/Task'
import { Checkbox } from '@/components/ui/checkbox'
import { ModeContext } from '@/providers/ModeProvider'
import { useContext } from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

interface ListItemProps {
  task: Task
}

export default function ListItem({ task }: ListItemProps) {
  const { data } = useContext(ModeContext)
  
  async function handleMarkTaskAsCompleted(taskId: string) {
    await data.markTaskAsCompleted(taskId)
  }
  
  async function handleDeleteTask(taskId: string) {
    await data.deleteTask(taskId)
  }

  return (
    <div className='flex h-full justify-between items-center mb-2'>
      <div className='flex items-center gap-2'>
        <Checkbox
          onClick={() => handleMarkTaskAsCompleted(task.id)}
          checked={task.isCompleted} />
        <p className={`${task.isCompleted ? 'line-through text-zinc-300' : ''} text-zinc-500 font-medium`}>
          {task.description}
        </p>
      </div>
      <Button className='hover:text-red-600' size={'icon'} variant={'ghost'} onClick={() => handleDeleteTask(task.id)}>
        <Trash2 size={16} />
      </Button>
    </div>
  )
}