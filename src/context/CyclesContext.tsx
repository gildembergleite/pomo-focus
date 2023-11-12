'use client'
import { Mode } from '@/@types/Mode'
import { awaitingMode, focusMode, longPauseMode, shortPauseMode } from '@/lib/ModeWithDurations'
import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CycleContextProps {
  currentMode: Mode
  nextMode: Mode
  progress: number
  isRunning: boolean
  changeMode: () => void
  startTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
}

export const CyclesContext = createContext({} as CycleContextProps)

export function CyclesProvider({ children }: { children: ReactNode }) {
  const [currentMode, setCurrentMode] = useState<Mode>(awaitingMode)
  const [nextMode, setNextMode] = useState<Mode>(focusMode)
  const [countCycles, setCountCycles] = useState<number>(0)
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

  function startTimer() {
    setIsRunning(true)
    setIsFinished(false)
  }

  function stopTimer() {
    setIsRunning(false)
  }

  function resetTimer() {
    setIsRunning(false)
    setProgress(0)
  }

  function setModeConfig(currentMode: Mode, nextMode: Mode) {
    setCurrentMode(currentMode)
    setNextMode(nextMode)
    if (countCycles < 7) {
      setCountCycles((state) => state + 1)
    } else {
      setCountCycles(0)
    }
  }

  function changeMode() {
    if (countCycles === 0 || countCycles === 2 || countCycles === 4) {
      setModeConfig(focusMode, shortPauseMode)
    } else if (countCycles === 1 || countCycles === 3 || countCycles === 5) {
      setModeConfig(shortPauseMode, focusMode)
    } else if (countCycles === 6) {
      setModeConfig(focusMode, longPauseMode)
    } else {
      setModeConfig(longPauseMode, focusMode)
    }
  }

  return (
    <CyclesContext.Provider value={{
      currentMode,
      nextMode,
      progress,
      isRunning,
      changeMode,
      startTimer,
      stopTimer,
      resetTimer
    }}>
      {children}
    </CyclesContext.Provider>
  )
}


