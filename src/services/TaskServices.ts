import { Task } from '@/@types/Task'
import { v4 as uuid } from 'uuid'

export default class TaskService {
  private tasks: Task[] = []

  async getAllTasks() {
    return this.tasks
  }
  
  async addNewTask(taskDescription: string) {
    if (taskDescription.length > 0) {
      const task: Task = {
        id: uuid(),
        description: taskDescription,
        isCompleted: false,
      }
      this.tasks.push(task)
    } else {
      console.error('A descrição da tarefa não pode ser vazia!')
    }
  }

  async markTaskAsCompleted(taskId: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
    if (taskIndex !== -1) {
      const task = this.tasks[taskIndex]
      task.isCompleted = !task.isCompleted
    }
  }

  async deleteTask(taskId: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1)
    }
  }

  async changeMode() {
    
  }
}