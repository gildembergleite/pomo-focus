'use client'
import { useEffect, useState } from 'react'
import { useMode } from '@/providers/ModeProvider'
import { Mode } from '@/@types/Mode'
import { ModeSchemaProps, modeInfo } from '@/lib/ModeInfo'
import { awaitingMode } from '@/lib/ModeWithDurations'

interface ModeProps {
  selectMode: 'currentMode' | 'nextMode'
}
  
const getDefaultMode = (listMode: Mode): ModeSchemaProps => modeInfo[listMode.mode]

export default function Modes({ selectMode }: ModeProps) {
  const { data } = useMode()
  const [mode, setMode] = useState<Mode>(awaitingMode)
  const [modeSchema, setModeSchema] = useState(getDefaultMode(mode))

  useEffect(() => {
    setModeTo()
  }, [mode])

  async function setModeTo() {
    const newMode = selectMode === 'currentMode'
      ? await data.getCurrentMode()
      : await data.getNextMode()
    
    setMode(newMode)
    setModeSchema(getDefaultMode(newMode))
  }

  const { icon, color, label } = modeSchema

  return (
    <div className={`${color} flex items-center gap-2 px-2 py-1 border bg-opacity-20 rounded-sm`}>
      {icon}
      <p className='font-semibold'>{label}</p>
    </div>
  )
}
