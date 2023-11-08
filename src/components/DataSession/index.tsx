import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import CurrentMode from './CurrentMode'
import NextMode from './NextMode'
import Timer from './Timer'

export default function DataSession() {
  return (
    <Card className='flex flex-col flex-1 rounded-xl p-6'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-zinc-600'>Dados da sessão</CardTitle>
        <CardDescription className='text-base text-zinc-500'>Acompanhe os próximos ciclos</CardDescription>
      </CardHeader>
      <Separator className='my-6' />
      <CardContent className='flex flex-col'>
        <div className='flex flex-col gap-6 pb-6'>
          <CurrentMode />
          <NextMode />
        </div>
        <Timer />
      </CardContent>
    </Card>
  )
}