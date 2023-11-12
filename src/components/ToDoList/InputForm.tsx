'use client'
import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface InputFormProps {
  addNewTask: (taskDescription: string) => void
}

export default function InputForm({ addNewTask }: InputFormProps) {
  const [inputValue, setInputValue] = useState('')

  async function handleAddNewTask(event: FormEvent) {
    event.preventDefault()
    addNewTask(inputValue)
    setInputValue('')
  }

  function handleSetInputValue(inputValue: string) {
    setInputValue(inputValue)
  }

  return (
    <form onSubmit={handleAddNewTask} className='flex items-center gap-2'>
      <Input
        className='bg-zinc-100 text-zinc-600'
        placeholder='Adicione uma nova tarefa'
        value={inputValue}
        onChange={(e) => handleSetInputValue(e.target.value)}
        required
      />
      <Button>Adicionar</Button>
    </form>
  )
}