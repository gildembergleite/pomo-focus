import { Task } from '@/@types/Task'
import { Checkbox } from '@/components/ui/checkbox'

interface ListItemProps {
  task: Task
}

export default function ListItem({ task }: ListItemProps) {
  return (
    <div className='flex h-full items-center gap-2 mb-4'>
      <Checkbox checked={task.isCompleted} />
      <p className='text-zinc-500 font-medium'>{task.description}</p>
    </div>
  )
}