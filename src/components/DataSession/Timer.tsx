export default function Timer() {
  return (
    <div className="flex w-full py-6 justify-center items-center">
      <div className="relative w-56 h-56 rounded-full bg-zinc-100">
        <div className="absolute justify-center items-center w-full h-full rounded-full bg-white border-[16px] border-lime-500">
          <div className="flex w-full h-full justify-center items-center text-5xl font-extrabold">
            <span>2</span>
            <span>5</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}