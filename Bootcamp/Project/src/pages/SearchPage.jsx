import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useSearchProducts from '@/hooks/useSearchProducts'
import ProductCard from '@/components/ProductCard'
import { Search, PackageSearch } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="aspect-square bg-gray-200 rounded-t-xl" />
    <div className="p-3 space-y-2">
      <div className="h-2.5 w-16 bg-gray-200 rounded" />
      <div className="h-3.5 w-full bg-gray-200 rounded" />
      <div className="h-4 w-20 bg-gray-200 rounded mt-1" />
    </div>
  </div>
)

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { products, loading } = useSearchProducts(query)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-1.5 text-xs text-gray-500">
          <Search size={12} />
          <span>Search Results</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          {query ? (
            <>Results for <span className="text-violet-600">"{query}"</span></>
          ) : (
            'Search Products'
          )}
        </h1>
        {!loading && products.length > 0 && (
          <p className="mt-1 text-sm text-gray-500">
            {products.length} product{products.length !== 1 ? 's' : ''} found
          </p>
        )}
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* Results */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Empty — query present but no results */}
      {!loading && products.length === 0 && query && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <PackageSearch size={56} className="mb-4 text-gray-300" />
          <h2 className="mb-1 text-lg font-semibold text-gray-900">No products found</h2>
          <p className="text-sm text-gray-500">
            Nothing matched "{query}". Try a different term.
          </p>
        </div>
      )}

      {/* Empty — no query */}
      {!query && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Search size={56} className="mb-4 text-gray-300" />
          <h2 className="mb-1 text-lg font-semibold text-gray-900">Start searching</h2>
          <p className="text-sm text-gray-500">
            Type something in the search bar above to find products.
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchPage
