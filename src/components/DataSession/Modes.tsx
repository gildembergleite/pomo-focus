'use client'
import { useEffect, useState } from 'react'
import { useMode } from '@/providers/ModeProvider'
import { Mode } from '@/@types/Mode'
import { ModeSchemaProps, modeInfo } from '@/lib/ModeInfo'

interface ModeProps {
  selectMode: 'currentMode' | 'nextMode'
}
  
const getDefaultMode = (listMode: Mode): ModeSchemaProps => modeInfo[listMode.mode]

export default function Modes({ selectMode }: ModeProps) {
  const { currentMode, nextMode } = useMode()
  const mode = selectMode === 'currentMode' ? currentMode : nextMode
  const [modeSchema, setModeSchema] = useState(getDefaultMode(mode))

  useEffect(() => {
    setModeSchema(getDefaultMode(mode))
  }, [mode])

  const { icon, color, label } = modeSchema

  return (
    <div className={`${color} flex items-center gap-2 px-2 py-1 border bg-opacity-20 rounded-sm`}>
      {icon}
      <p className='font-semibold'>{label}</p>
    </div>
  )
}
