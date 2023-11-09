import { Mode } from '@/@types/Mode'
import { Task } from '@/@types/Task'
import { awaitingMode, focusMode, longPauseMode, shortPauseMode } from '@/lib/ModeWithDurations'
import { v4 as uuid } from 'uuid'

export default class TaskService {
  public tasks: Task[] = []
  public countCycles: number
  public currentMode: Mode
  public nextMode: Mode

  constructor() {
    this.countCycles = 0,
    this.currentMode = awaitingMode,
    this.nextMode = focusMode
  }

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

  async setModeConfig(currentMode: Mode, nextMode: Mode) {
    this.currentMode = currentMode
    this.nextMode = nextMode
    if (this.countCycles < 7) {
      this.countCycles = this.countCycles + 1
    } else {
      this.countCycles = 0
    }
    console.log(this.countCycles, this.currentMode, this.nextMode)
  }

  async changeMode() {
    if (this.countCycles === 0 || this.countCycles === 2 || this.countCycles === 4) {
      await this.setModeConfig(focusMode, shortPauseMode)
    } else if (this.countCycles === 1 || this.countCycles === 3 || this.countCycles === 5) {
      await this.setModeConfig(shortPauseMode, focusMode)
    } else if (this.countCycles === 6) {
      await this.setModeConfig(focusMode, longPauseMode)
    } else {
      await this.setModeConfig(longPauseMode, focusMode)
    }
  }
}