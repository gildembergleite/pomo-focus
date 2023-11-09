'use client'
import { useState, useEffect, useContext } from 'react'
import { Button } from '../ui/button'
import { Pause, Play, RefreshCw } from 'lucide-react'
import { ModeContext } from '@/providers/ModeProvider'

export default function Timer() {
  const { data } = useContext(ModeContext)
  const [progress, setProgress] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const circumference = 2 * Math.PI * 48
  const offset = (circumference * progress / seconds)
  const borderStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: -offset,
  }

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isRunning) {
      setSeconds(data.currentMode.timeInSeconds)
      timer = setInterval(() => {
        setProgress((state) => (state >= seconds ? 0 : state + 1))
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isRunning])

  async function startTimer() {
    setIsRunning(true)
    await data.changeMode()
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
      <div className="relative w-56 h-56 rounded-full bg-zinc-100">
        <svg className="absolute w-full h-full min-w-56 min-h-56 rounded-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="circle stroke-lime-500"
            cx="50"
            cy="50"
            r="48"
            fill="transparent"
            strokeWidth="8"
            style={borderStyle}
          />
        </svg>
        <div className="flex w-56 h-56 justify-center items-center text-5xl text-zinc-600 font-extrabold bg-white border-[14px] rounded-full border-zinc-100">
          <span>2</span>
          <span>5</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
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
