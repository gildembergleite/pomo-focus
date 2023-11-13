'use client'
import { useCycles } from '@/hooks/useCycles'
import { modeColors } from '@/lib/ModeColors'
import { Roboto_Mono } from 'next/font/google'
import { useEffect, useState } from 'react'

interface StopwatchProps {
  progress: number;
}

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '700'})

export default function Stopwatch({ progress }: StopwatchProps) {
  const { currentMode, isRunning } = useCycles()
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  
  const minutesFormatted = String(minutes).padStart(2, '0')
  const secondsFormatted = String(seconds).padStart(2, '0')
  const timer = `${minutesFormatted}:${secondsFormatted}`
  
  const strokeColor = modeColors[currentMode.description]
  const circumference = 2 * Math.PI * 48
  const offset = (circumference * progress) / currentMode.timeInSeconds
  const borderStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: -offset,
  }

  if (currentMode.description !== strokeColor) {
    modeColors[currentMode.description]
  }

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
        
  }, [progress])


  return (
    <div className="relative w-56 h-56 rounded-full bg-background">
      <svg className="absolute w-full h-full min-w-56 min-h-56 rounded-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className={`circle ${strokeColor}`}
          cx="50"
          cy="50"
          r="48"
          fill="transparent"
          strokeWidth="8.5"
          style={borderStyle}
        />
      </svg>
      <div className={`
        ${robotoMono.className} flex w-56 h-56 justify-center items-center 
        text-5xl font-bold bg-card border-[14px] border-foreground/30
        rounded-full text-foreground/70
      `}>
        <span>{timer}</span>
      </div>
    </div>
  )
}
