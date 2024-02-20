import { SearchIcon } from 'lucide-react'
import { useRef } from 'react'

const SearchBox = ({ setUser }) => {
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim()
    if (inputValue) {
      setUser(inputValue)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-x-3 bg-gray-800 px-3 py-2 rounded-md"
    >
      <SearchIcon className="text-yellow-400" />
      <input
        type="text"
        placeholder="Search GitHub Username..."
        className="bg-transparent outline-none flex-1"
        ref={inputRef}
      />
      <button
        type="submit"
        className="font-medium bg-yellow-400 text-gray-900 px-2 py-1 rounded-md"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
