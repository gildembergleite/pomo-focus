import DataSession from '@/components/DataSession'
import Header from '@/components/Header'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-6xl p-10">
        <Header />
        <div className='grid grid-cols-2 pt-12 gap-9'>
          <DataSession />
          <TodoList />
        </div>
      </div>
    </main>
  )
}
