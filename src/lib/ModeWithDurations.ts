import { Mode } from '@/@types/Mode'

export const awaitingMode: Mode = {
  description:'awaiting',
  timeInSeconds: 0,
}

export const focusMode: Mode = {
  description:'focus',
  timeInSeconds: 1500,
}

export const shortPauseMode: Mode = {
  description:'shortPause',
  timeInSeconds: 300,
}

export const longPauseMode: Mode = {
  description:'longPause',
  timeInSeconds: 900,
}