import { ScrollArea } from '@/components/ui/scroll-area'
import { useTasks } from '@/hooks/useTasks'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

export default function ScrollList() {
  const { tasks, markTaskAsCompleted, deleteTask } = useTasks()

  function handleMarkTaskAsCompleted(taskId: string) {
    markTaskAsCompleted(taskId)
  }

  function handleDeleteTask(taskId: string) {
    deleteTask(taskId)
  }
  
  return (
    <ScrollArea className='max-h-[400px]'>
      {tasks.map((task) => (
        <div key={task.id} className='flex h-full justify-between items-center mb-2'>
          <div className='flex items-center gap-2'>
            <Checkbox
              onClick={() => handleMarkTaskAsCompleted(task.id)}
              checked={task.isCompleted} />
            <p className={`${task.isCompleted ? 'line-through text-foreground/20' : ''} text-foreground/70 font-medium`}>
              {task.description}
            </p>
          </div>
          <Button className='text-foreground/70 hover:text-red-600' size={'icon'} variant={'ghost'} onClick={() => handleDeleteTask(task.id)}>
            <Trash2 size={16} />
          </Button>
        </div>
      ))}
    </ScrollArea>
  )
}
