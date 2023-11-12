import { Github, Languages  } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className='flex w-full justify-between items-center'>
      <div>
        <h1 className='text-foreground text-4xl font-extrabold'>Pomo Focus</h1>
        <p className='text-accent-foreground'>Gerencie seu tempo de maneira mágica!</p>
      </div>
      <div className='flex gap-2'>
        <ThemeToggle />

        <Link className='flex justify-center items-center h-9 w-9 p-2 rounded-lg bg-zinc-100 text-zinc-500 hover:text-foreground transition-colors duration-300 dark:hover:bg-background hover:drop-shadow-sm hover:shadow-background' href="#">
          <Github size={16} />
        </Link>

        <Link className='flex justify-center items-center h-9 w-9 p-2 rounded-lg bg-zinc-100 text-zinc-500 hover:text-foreground transition-colors duration-300 dark:hover:bg-background hover:drop-shadow-sm hover:shadow-background' href="#">
          <Languages size={16} />
        </Link>
      </div>
    </header>
  )
}