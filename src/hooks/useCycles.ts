import { CyclesContext } from '@/context/CyclesContext'
import { useContext } from 'react'

export function useCycles() {
  const context = useContext(CyclesContext)
  if (!context) {
    throw new Error('useCycles must be used within a ModeProvider')
  }
  return context
}