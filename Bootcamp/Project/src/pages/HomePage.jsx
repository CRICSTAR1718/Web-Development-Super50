import useProducts from '@/hooks/useProducts'
import ProductCard from '@/components/ProductCard'
import { Sparkles, TrendingUp } from 'lucide-react'

const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="aspect-square bg-gray-200 rounded-t-xl" />
    <div className="p-3 space-y-2">
      <div className="h-2.5 w-16 bg-gray-200 rounded" />
      <div className="h-3.5 w-full bg-gray-200 rounded" />
      <div className="h-3.5 w-3/4 bg-gray-200 rounded" />
      <div className="h-4 w-20 bg-gray-200 rounded mt-1" />
    </div>
  </div>
)

const HomePage = () => {
  const { products, loading } = useProducts()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* Hero */}
      <section className="mb-10 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-12 text-center text-white shadow-lg">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium mb-4">
          <Sparkles size={13} />
          Discover Amazing Products
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Shop the Best Deals
        </h1>
        <p className="mt-3 text-lg text-white/80 max-w-lg mx-auto">
          Explore thousands of products across every category. Quality
          guaranteed, prices you'll love.
        </p>
      </section>

      {/* Products grid */}
      <section>
        <div className="mb-5 flex items-center gap-2">
          <TrendingUp size={18} className="text-violet-600" />
          <h2 className="text-lg font-bold text-gray-900">Featured Products</h2>
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700">
            10 picks
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage
