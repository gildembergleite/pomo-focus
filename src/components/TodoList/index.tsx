import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function TodoList() {
  return (
    <Card className='flex flex-col flex-1 rounded-xl p-6'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-zinc-600'>Lista de tarefas</CardTitle>
        <CardDescription className='text-base text-zinc-500'>Seus objetivos para essa sessão</CardDescription>
      </CardHeader>
      <Separator className='my-6' />
      <CardContent>
        
      </CardContent>
    </Card>
  )
}