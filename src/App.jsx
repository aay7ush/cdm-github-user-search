import { useState } from 'react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import UserProfile from './components/UserProfile'

const App = () => {
  const [user, setUser] = useState('aay7ush')

  return (
    <main className="min-h-screen text-white grid place-content-center dark:bg-gray-900 space-y-5 py-10">
      <Header />
      <SearchBox setUser={setUser} />
      <UserProfile user={user} />
    </main>
  )
}

export default App
