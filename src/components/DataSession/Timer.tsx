'use client'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Pause, Play, RefreshCw } from 'lucide-react'
import { useMode } from '@/providers/ModeProvider'
import Stopwatch from './Stopwatch'

export default function Timer() {
  const { currentMode, changeMode } = useMode()
  const [progress, setProgress] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isRunning) {
      setSeconds(currentMode.timeInSeconds)
      timer = setInterval(() => {
        setProgress((state) => {
          if (state >= seconds) {
            setIsRunning(false)
            changeMode()
            return 0
          } else {
            return state + 1
          }
        })
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isRunning, seconds])

  async function startTimer() {
    setIsRunning(true)
    changeMode()
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setProgress(0)
  }


  return (
    <div className="flex flex-col w-full py-6 justify-center items-center gap-8">
      <Stopwatch strokeProgress={progress/seconds} />
      <div className='flex justify-center items-center gap-4'>
        {isRunning ? (
          <Button variant={'secondary'} className='gap-2' onClick={stopTimer}>
            <Pause size={16} />
            Pausar ciclo
          </Button>
        ) : (
          <Button className='gap-2' onClick={startTimer}>
            <Play size={16} />
            Iniciar ciclo
          </Button>
        )}
        <Button variant={'destructive'} className='gap-2' onClick={resetTimer}>
          <RefreshCw size={16} />
          Reiniciar ciclo
        </Button>
      </div>
    </div>
  )
}
