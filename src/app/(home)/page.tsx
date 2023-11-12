import DataSession from '@/components/DataSession'
import Header from '@/components/Header'
import ToDoList from '@/components/ToDoList'

export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-6xl px-4 py-10 md:p-10">
        <Header />
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-12 gap-9'>
          <DataSession />
          <ToDoList />
        </div>
      </div>
    </main>
  )
}
