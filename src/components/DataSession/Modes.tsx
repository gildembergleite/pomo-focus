'use client'
import { useContext, useEffect, useState } from 'react'
import { ModeContext } from '@/providers/ModeProvider'
import { Mode } from '@/@types/Mode'
import { ModeSchemaProps, modeInfo } from '@/lib/ModeInfo'

const getDefaultMode = (listMode: Mode): ModeSchemaProps => modeInfo[listMode.mode]

interface ModeProps {
  selectMode: 'currentMode' | 'nextMode'
}

export default function Modes({ selectMode }: ModeProps) {
  const { currentMode, nextMode } = useContext(ModeContext)
  
  const mode = selectMode === 'currentMode' ? currentMode : nextMode
  
  const [modeSchema, setModeSchema] = useState<ModeSchemaProps>(getDefaultMode(mode))

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
