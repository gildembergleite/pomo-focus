import { Task } from '@/@types/Task'
import { v4 as uuid } from 'uuid'

export default class TaskService {
  private tasks: Task[] = []

  getAllTasks(): Task[] {
    return this.tasks
  }
  
  addNewTask(taskDescription: string) {
    const task: Task = {
      id: uuid(),
      description: taskDescription,
      isCompleted: false,
    }

    this.tasks.push(task)
  }
}