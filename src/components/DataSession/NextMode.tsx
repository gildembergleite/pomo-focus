import Modes from './Modes'

export default function NextMode() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <p className="text-zinc-500 text-lg font-semibold">Próximo modo:</p>
        <p className="text-zinc-400 font-medium">Qual ciclo será ativado:</p>
      </div>
      <div>
        <Modes mode='shortPause' />
      </div>
    </div>
  )
}