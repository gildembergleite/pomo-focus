'use client'
import { useCycles } from '@/hooks/useCycles'
import { Rajdhani } from 'next/font/google'
import { useEffect, useState } from 'react'

interface StopwatchProps {
  progress: number;
}

const rajdhani = Rajdhani({ subsets: ['latin'], weight: '700'})

export default function Stopwatch({ progress }: StopwatchProps) {
  const { currentMode, isRunning } = useCycles()
  const [strokeColor, setStrokeColor] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const minutesFormatted = String(minutes).padStart(2, '0')
  const secondsFormatted = String(seconds).padStart(2, '0')
  const timer = `${minutesFormatted}:${secondsFormatted}`

  useEffect(() => {
    setStrokeColor(modeColors[currentMode.mode])
  }, [currentMode])

  useEffect(() => {
    const remainingSeconds = currentMode.timeInSeconds - Math.floor(progress)
    const mins = Math.floor(remainingSeconds / 60)
    const secs = remainingSeconds % 60

    setMinutes(mins)
    setSeconds(secs)

    if (isRunning) {
      document.title = `Time: ${timer}`
    } else {
      document.title = 'Pomo Focus'
    }
    
  }, [progress, currentMode])

  const modeColors: { [key in typeof currentMode.mode]: string } = {
    awaiting: 'stroke-zinc-300',
    focus: 'stroke-lime-500',
    shortPause: 'stroke-amber-500',
    longPause: 'stroke-cyan-500',
  }

  const circumference = 2 * Math.PI * 48
  const offset = (circumference * progress) / currentMode.timeInSeconds
  const borderStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: -offset,
  }

  return (
    <div className="relative w-56 h-56 rounded-full bg-zinc-100">
      <svg className="absolute w-full h-full min-w-56 min-h-56 rounded-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className={`circle ${strokeColor}`}
          cx="50"
          cy="50"
          r="48"
          fill="transparent"
          strokeWidth="8"
          style={borderStyle}
        />
      </svg>
      <div className={`
      ${rajdhani.className} flex w-56 h-56 justify-center items-center text-6xl 
      text-zinc-600 font-bold bg-white border-[14px] rounded-full border-zinc-100`}>
        <span>{timer}</span>
      </div>
    </div>
  )
}
