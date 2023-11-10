import Modes from './Modes'

export default function CurrentMode() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <p className="text-zinc-500 text-lg font-semibold">Modo atual:</p>
        <p className="text-zinc-400 font-medium hidden md:flex">Ciclo atual do cronômetro</p>
      </div>
      <div>
        <Modes selectMode='currentMode' />
      </div>
    </div>
  )
}