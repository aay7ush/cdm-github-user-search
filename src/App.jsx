import { useState } from 'react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <main className="min-h-screen text-white grid place-content-center dark:bg-gray-900 space-y-5 py-10">
      <Header />
      <SearchBox setUser={setUser} />
    </main>
  )
}

export default App
