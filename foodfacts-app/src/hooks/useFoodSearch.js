import { useState } from 'react'
import axios from 'axios'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    setLoading(true)
    setError(null)

    try {
      const url = `/api/cgi/search.pl`

      const response = await axios.get(url, {
        params: {
          search_terms: query,
          json: 1,
          page_size: 10
        }
      })
      

      // ✅ FILTER LOGIC (same as before)
      const filtered = response.data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      )

      setResults(filtered)

    } catch (err) {
      if (err.response) {
        // Server responded with error
        setError(`Server error: ${err.response.status}. Please try again.`)
      } else if (err.request) {
        // No response (likely offline)
        setError('Network error. Check your connection and try again.')
      } else {
        // Something else
        setError('Something went wrong. Please try again.')
      }

      setResults([])
    }
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch