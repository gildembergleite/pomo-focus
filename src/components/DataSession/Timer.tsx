'use client'
import { useState, useEffect } from 'react'

export default function Timer() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((state) => (state >= 100 ? 0 : state + 1))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const circumference = 2 * Math.PI * 48
  const offset = (circumference * progress / 100)
  const borderStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: -offset,
  }

  return (
    <div className="flex w-full py-6 justify-center items-center">
      <div className="relative w-56 h-56 rounded-full bg-zinc-100">
        <svg className="absolute w-full h-full rounded-full -rotate-90" viewBox="0 0 100 100">
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
        <div className="flex w-full h-full justify-center items-center text-5xl text-zinc-600 font-extrabold bg-white border-[14px] rounded-full border-zinc-100">
          <span>2</span>
          <span>5</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}
