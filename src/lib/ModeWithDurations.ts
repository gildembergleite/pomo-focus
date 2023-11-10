import { Mode } from '@/@types/Mode'

export const awaitingMode: Mode = {
  mode: 'awaiting',
  timeInSeconds: 0,
}

export const focusMode: Mode = {
  mode: 'focus',
  timeInSeconds: 5,
}

export const shortPauseMode: Mode = {
  mode: 'shortPause',
  timeInSeconds: 5,
}

export const longPauseMode: Mode = {
  mode: 'longPause',
  timeInSeconds: 5,
}