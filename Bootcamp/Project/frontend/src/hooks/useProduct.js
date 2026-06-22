import { useState, useEffect } from 'react'
import { fetchProductById } from '@/api/productApi'

const useProduct = (id) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id])

  return { product, loading, error }
}

export default useProduct
