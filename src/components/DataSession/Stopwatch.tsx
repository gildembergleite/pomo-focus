'use client'
import { useMode } from '@/providers/ModeProvider'
import { useEffect, useState } from 'react'

interface StopwatchProps {
  strokeProgress: number
}

export default function Stopwatch({ strokeProgress }: StopwatchProps) {
  const { currentMode } = useMode()
  const [strokeColor, setStrokeColor] = useState('')

  useEffect(() => {
    setStrokeColor(modeColors[currentMode.mode])
  }, [currentMode])
  
  const modeColors: { [key in typeof currentMode.mode]: string } = {
    awaiting: 'stroke-zinc-300',
    focus: 'stroke-lime-500',
    shortPause: 'stroke-amber-500',
    longPause: 'stroke-cyan-500',
  }
  
  const circumference = 2 * Math.PI * 48
  const offset = (circumference * strokeProgress)
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
      <div className="flex w-56 h-56 justify-center items-center text-5xl text-zinc-600 font-extrabold bg-white border-[14px] rounded-full border-zinc-100">
        <span>0</span>
        <span>0</span>
        <span>:</span>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  )
}