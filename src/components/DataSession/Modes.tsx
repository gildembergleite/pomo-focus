'use client'
import { useContext, useEffect, useState } from 'react'
import { ModeContext } from '@/providers/ModeProvider'
import { Mode } from '@/@types/Mode'
import { ModeSchemaProps, modeInfo } from '@/lib/ModeInfo'
import { awaitingMode } from '@/lib/ModeWithDurations'

interface ModeProps {
  selectMode: 'currentMode' | 'nextMode'
}
  
const getDefaultMode = (listMode: Mode): ModeSchemaProps => modeInfo[listMode.mode]

export default function Modes({ selectMode }: ModeProps) {
  const { data } = useContext(ModeContext)
  const [mode, setMode] = useState(awaitingMode)

  useEffect(() => {
    setModeHandler()
  }, [data, mode])

  async function setModeHandler() {
    if (selectMode === 'currentMode') {
      const mode = await data.getCurrentMode()
      setMode(mode)
    } else {
      const mode = await data.getNextMode()
      setMode(mode)
    }
    console.log(mode.mode)
  }

  const { icon, color, label } = getDefaultMode(mode)

  return (
    <div className={`${color} flex items-center gap-2 px-2 py-1 border bg-opacity-20 rounded-sm`}>
      {icon}
      <p className='font-semibold'>{label}</p>
    </div>
  )
}
