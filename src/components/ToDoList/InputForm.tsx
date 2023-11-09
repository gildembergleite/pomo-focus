import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


export default function InputForm() {
  return (
    <form className='flex items-center gap-2'>
      <Input className='bg-zinc-100' />
      <Button>Adicionar</Button>
    </form>
  )
}