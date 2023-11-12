import { ScrollArea } from '@/components/ui/scroll-area'
import ListItem from './ListItem'
import { useTasks } from '@/hooks/useTasks'

export default function ScrollList() {
  const { tasks } = useTasks()
  
  return (
    <ScrollArea className='max-h-[400px]'>
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ScrollArea>
  )
}
