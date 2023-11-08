import { Sun, Github, Languages  } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex w-full justify-between items-center'>
      <div>
        <h1 className='text-zinc-800 text-4xl font-extrabold'>Pomodoro</h1>
        <p className='text-zinc-500'>Gerencie seu tempo de maneira mágica!</p>
      </div>
      <div className='flex gap-2'>
        <Link className='p-2 rounded-lg bg-zinc-100' href="#">
          <Sun size={16} color='#A1A1A1' />
        </Link>

        <Link className='p-2 rounded-lg bg-zinc-100' href="#">
          <Github size={16} color='#A1A1A1' />
        </Link>

        <Link className='p-2 rounded-lg bg-zinc-100' href="#">
          <Languages size={16} color='#A1A1A1' />
        </Link>
      </div>
    </header>
  )
}