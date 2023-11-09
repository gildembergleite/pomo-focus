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
}