import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'
import { ROUTES } from '@/constants/routes'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const viewPath = ROUTES.VIEW.replace(':id', product.id)
  const discount = product.discountPercentage
    ? Math.round(product.discountPercentage)
    : null

  return (
    <div
      onClick={() => navigate(viewPath)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-violet-300"
    >
      {/* Discount badge */}
      {discount && (
        <span className="absolute top-2 left-2 z-10 rounded-full bg-violet-600 px-2 py-0.5 text-[11px] font-bold text-white">
          -{discount}%
        </span>
      )}

      {/* Thumbnail */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-600">
          {product.category}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 leading-snug">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star size={11} className="fill-amber-400 text-amber-400 shrink-0" />
          <span className="text-xs text-gray-500">
            {product.rating?.toFixed(1)}
            {product.reviews?.length ? ` (${product.reviews.length})` : ''}
          </span>
        </div>

        {/* Price */}
        <p className="mt-auto pt-1 text-base font-bold text-gray-900">
          ${product.price?.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
