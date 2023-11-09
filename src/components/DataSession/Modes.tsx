'use client'
import { useContext, useEffect, useState } from 'react'
import { Brain, CoffeeIcon, Loader2Icon } from 'lucide-react'
import { ModeContext } from '@/providers/ModeProvider'
import { Mode } from '@/@types/Mode'

interface ModeInfo {
  [key: string]: ModeSchemaProps;
}

interface ModeSchemaProps {
  color: string;
  icon: JSX.Element;
  label: string;
}

const modeInfo: ModeInfo = {
  awaiting: {
    color: 'border-zinc-500 bg-zinc-500 text-zinc-500',
    icon: <Loader2Icon className='text-zinc-500 animate-spin' size={16} />,
    label: 'Aguardando',
  },
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

const getDefaultMode = (listMode: Mode): ModeSchemaProps => modeInfo[listMode.mode]

export default function Modes() {
  const { mode } = useContext(ModeContext)
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
