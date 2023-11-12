import { Github, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/app/(home)/ThemeToggle'

export default function Header() {
 
  return (
    <header className='flex w-full justify-between items-center'>
      <div>
        <h1 className='text-foreground/70 text-4xl font-extrabold'>Pomo Focus</h1>
        <p className='text-foreground/50'>Gerencie seu tempo de maneira mágica!</p>
      </div>
      <div className='flex gap-2'>
        <ThemeToggle />

        <Button variant={'ghost'} className='flex justify-center items-center h-10 w-10 p-2 rounded-lg bg-background text-foreground/70'>
          <Github size={18} />
        </Button>

        <Button variant={'ghost'} className='flex justify-center items-center h-10 w-10 p-2 rounded-lg bg-background text-foreground/70' disabled>
          <Languages size={18} />
        </Button>
      </div>
    </header>
  )
}