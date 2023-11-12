'use client'
import { Button } from '../ui/button'
import { Pause, Play, RefreshCw } from 'lucide-react'
import Stopwatch from './Stopwatch'
import { useCycles } from '@/hooks/useCycles'

export default function Timer() {
  const {
    currentMode,
    progress,
    isRunning,
    changeMode,
    startTimer,
    stopTimer,
    resetTimer
  } = useCycles()

  return (
    <div className="flex flex-col w-full py-6 justify-center items-center gap-8">
      <Stopwatch progress={progress} />
      {currentMode.description === 'awaiting'
        ? (
          <Button className='text-zinc-100 font-bold gap-2' onClick={changeMode}>
            Iniciar ciclo
          </Button>)
        : (
          <div className='flex justify-center items-center gap-4'>
            {isRunning ? (
              <Button variant={'secondary'} className='gap-2' onClick={stopTimer}>
                <Pause size={16} />
              </Button>
            ) : (
              <Button className='text-zinc-100 gap-2' onClick={startTimer}>
                <Play size={16} />
              </Button>
            )}
            <Button variant={'destructive'} className='gap-2 text-zinc-100' onClick={resetTimer}>
              <RefreshCw size={16} />
            </Button>
          </div>
        )
      }
    </div>
  )
}
