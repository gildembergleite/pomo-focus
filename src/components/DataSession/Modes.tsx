'use client'
import { useEffect, useState } from 'react'
import { Brain, CoffeeIcon } from 'lucide-react'

interface ModeProps {
  mode: 'focus' | 'shortPause' | 'longPause';
}

interface ModeInfo {
  [key: string]: ModeSchemaProps;
}

interface ModeSchemaProps {
  color: string;
  icon: JSX.Element;
  label: string;
}

const modeInfo: ModeInfo = {
  focus: {
    color: 'border-lime-500 bg-lime-500 text-lime-500',
    icon: <Brain className='text-lime-500' size={16} />,
    label: 'Foco',
  },
  shortPause: {
    color: 'border-amber-500 bg-amber-500 text-amber-500',
    icon: <CoffeeIcon className='text-amber-500' size={16} />,
    label: 'Pausa curta',
  },
  longPause: {
    color: 'border-cyan-500 bg-cyan-500 text-cyan-500',
    icon: <CoffeeIcon className='text-cyan-500' size={16} />,
    label: 'Pausa longa',
  }
}

const getDefaultMode = (mode: string): ModeSchemaProps => modeInfo[mode]

export default function Modes({ mode }: ModeProps) {
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
