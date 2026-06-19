import { useState, useEffect } from 'react'
import { searchProducts } from '@/api/productApi'

const useSearchProducts = (query) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) {
      setProducts([])
      return
    }

    const search = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await searchProducts(query)
        setProducts(data.products || [])
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    search()
  }, [query])

  return { products, loading, error }
}

export default useSearchProducts
