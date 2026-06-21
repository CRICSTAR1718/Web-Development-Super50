import useProducts from '@/hooks/useProducts'
import ProductCard from '@/components/ProductCard'
import { Sparkles, TrendingUp } from 'lucide-react'

const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl border border-white/10 bg-white/5 shadow-sm">
    <div className="aspect-square bg-white/10 rounded-t-xl" />
    <div className="p-3 space-y-2">
      <div className="h-2.5 w-16 bg-white/10 rounded" />
      <div className="h-3.5 w-full bg-white/10 rounded" />
      <div className="h-3.5 w-3/4 bg-white/10 rounded" />
      <div className="h-4 w-20 bg-white/10 rounded mt-1" />
    </div>
  </div>
)


const HomePage = () => {
  const { products, loading } = useProducts()

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-10 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-6 py-12 text-center text-white shadow-xl sm:px-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
          <Sparkles size={13} />
          Discover Amazing Products
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Shop the Best Deals
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/80">
          Explore thousands of products across every category.
        </p>
      </section>

      {/* Products */}
      <section>
        <div className="mb-6 flex items-center gap-2">
          <TrendingUp size={18} className="text-violet-600" />
          <h2 className="text-xl font-bold">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
            : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage


