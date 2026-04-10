import { useState } from 'react'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    setHasSearched(true)

    try {
      const url = `/api/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`
      const response = await fetch(url)
      const data = await response.json()

      const filteredProducts = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      )

      setResults(filteredProducts)
    } catch (error) {
      console.error('Something went wrong:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
  <div>
    <h1>🥗 FoodFacts</h1>

    <SearchBar onSearch={handleSearch} />

    {/* 1️⃣ Loading */}
    {loading && <p>Loading...</p>}

    {/* 2️⃣ Before search */}
    {!loading && !hasSearched && (
      <p>Search for a food above to see its nutrition info.</p>
    )}

    {/* 3️⃣ No results */}
    {!loading && hasSearched && results.length === 0 && (
      <p>No results found. Try a different search.</p>
    )}

    {/* 4️⃣ Results */}
    {!loading && results.length > 0 && (
      <FoodList products={results} />
    )}
  </div>
)
}

export default App