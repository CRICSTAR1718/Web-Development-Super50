import { useState, useEffect } from 'react'
import { fetchProducts } from '@/api/productApi'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts(100)
        // Pick 10 random products
        const shuffled = [...data.products].sort(() => Math.random() - 0.5)
        setProducts(shuffled.slice(0, 10))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { products, loading, error }
}

export default useProducts
