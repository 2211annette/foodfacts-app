import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim()) {
      onSearch(query)   // ✅ call parent function
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}   // ✅ update state
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar