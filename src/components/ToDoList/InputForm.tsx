'use client'
import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTasks } from '@/hooks/useTasks'

export default function InputForm() {
  const { addNewTask } = useTasks()
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
        className='bg-input text-foreground/70'
        placeholder='Adicione uma nova tarefa'
        value={inputValue}
        onChange={(e) => handleSetInputValue(e.target.value)}
        required
      />
      <Button className='text-zinc-100 font-bold'>Adicionar</Button>
    </form>
  )
}