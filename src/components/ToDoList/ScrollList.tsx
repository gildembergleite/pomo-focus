import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from './ListItem'
import { Task } from '@/@types/Task'

interface ScrollListProps {
  tasks: Task[]
  markTaskAsCompleted: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

export default function ScrollList({ tasks, markTaskAsCompleted, deleteTask }: ScrollListProps) {
  
  return (
    <ScrollArea className='max-h-[400px]'>
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} markTaskAsCompleted={markTaskAsCompleted} deleteTask={deleteTask} />
      ))}
    </ScrollArea>
  )
}
