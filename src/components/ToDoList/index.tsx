'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import InputForm from './InputForm'
import ScrollList from './ScrollList'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Task } from '@/@types/Task'

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addNewTask(taskDescription: string) {
    const newTask: Task = {
      id: uuid(),
      description: taskDescription,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  function markTaskAsCompleted(taskId: string) {
    const index = tasks.findIndex((task) => task.id === taskId)
    const newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks([...newTasks])
  }

  function deleteTask(taskId: string) {
    const index = tasks.findIndex((task) => task.id === taskId)
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks([...newTasks])
  }
  
  return (
    <Card className='flex flex-col flex-1 rounded-xl p-6'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-zinc-600'>Lista de tarefas</CardTitle>
        <CardDescription className='text-base text-zinc-500'>Seus objetivos para essa sessão</CardDescription>
      </CardHeader>
      <Separator className='my-6' />
      <CardContent className='flex flex-col h-full justify-between'>
        <ScrollList tasks={tasks} markTaskAsCompleted={markTaskAsCompleted} deleteTask={deleteTask} />
        <InputForm addNewTask={addNewTask} />
      </CardContent>
    </Card>
  )
}