'use client'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Pause, Play, RefreshCw } from 'lucide-react'
import Stopwatch from './Stopwatch'
import { useCycles } from '@/hooks/useCycles'

export default function Timer() {
  const { currentMode, changeMode } = useCycles()
  const [progress, setProgress] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (seconds > 0 && progress === 0 && isFinished === true) {
      changeMode()
    }

    if (isRunning) {
      setSeconds(currentMode.timeInSeconds)
      console.log(seconds)
      timer = setInterval(() => {
        setProgress((state) => {
          if (state >= seconds) {
            setIsRunning(false)
            setIsFinished(true)
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
    setIsFinished(false)
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
      <Stopwatch progress={progress} />
      {currentMode.mode === 'awaiting'
        ? (
          <Button className='gap-2' onClick={changeMode}>
            Iniciar ciclo
          </Button>)
        : (
          <div className='flex justify-center items-center gap-4'>
            {isRunning ? (
              <Button variant={'secondary'} className='gap-2' onClick={stopTimer}>
                <Pause size={16} />
              </Button>
            ) : (
              <Button className='gap-2' onClick={startTimer}>
                <Play size={16} />
              </Button>
            )}
            <Button variant={'destructive'} className='gap-2' onClick={resetTimer}>
              <RefreshCw size={16} />
            </Button>
          </div>
        )
      }
    </div>
  )
}
