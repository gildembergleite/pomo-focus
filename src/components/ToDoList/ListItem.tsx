import { Checkbox } from '@/components/ui/checkbox'

export default function ListItem() {
  return (
    <div className='flex h-full items-center gap-2 mb-4'>
      <Checkbox />
      <p className='text-zinc-500 font-medium'>Escrever e-mail importante</p>
    </div>
  )
}