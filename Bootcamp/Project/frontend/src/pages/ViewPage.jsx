import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useProduct from '@/hooks/useProduct'
import {
  Star,
  ArrowLeft,
  Tag,
  Package,
  ShieldCheck,
  Truck,
  RotateCcw,
} from 'lucide-react'

/* ── small stat badge ── */
const StatBadge = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center gap-1 rounded-lg border border-gray-200 bg-white p-3 text-center shadow-sm">
    <Icon size={18} className="text-violet-600" />
    <span className="text-[11px] text-gray-400 uppercase tracking-wide">{label}</span>
    <span className="text-sm font-semibold text-gray-900 text-center">{value}</span>
  </div>
)

/* ── loading skeleton ── */
const Skeleton = () => (
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="animate-pulse grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="aspect-square rounded-xl bg-gray-200" />
      <div className="space-y-4 pt-2">
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="h-7 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-8 w-28 rounded bg-gray-200 mt-4" />
      </div>
    </div>
  </div>
)

const ViewPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { product, loading } = useProduct(id)
  const [activeImage, setActiveImage] = useState(0)

  if (loading) return <Skeleton />
  if (!product) return null

  const images = product.images?.length ? product.images : [product.thumbnail]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-200/60 bg-white/60 shadow-[0_10px_30px_rgba(17,24,39,0.06)] backdrop-blur">
        <div className="p-6 sm:p-8">

          {/* Back */}
          <button

            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900"
          >
            <ArrowLeft size={15} />
            Back
          </button>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* ── Image Gallery ── */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 aspect-square shadow-sm">
                <img
                  src={images[activeImage]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-all duration-500"
                />
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`shrink-0 h-16 w-16 overflow-hidden rounded-lg border-2 transition-all ${activeImage === idx
                        ? 'border-violet-500 opacity-100'
                        : 'border-gray-200 opacity-60 hover:opacity-90'
                        }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── Product Info ── */}
            <div className="flex flex-col gap-5">

              {/* Category & Brand */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-semibold text-violet-700 capitalize">
                  {product.category}
                </span>
                {product.brand && (
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-0.5 text-xs text-gray-500">
                    {product.brand}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={i < Math.round(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-200 fill-gray-200'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating?.toFixed(1)} · {product.reviews?.length ?? 0} reviews
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${product.price?.toFixed(2)}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="rounded-full bg-violet-600 px-2.5 py-0.5 text-xs font-bold text-white">
                    -{Math.round(product.discountPercentage)}% OFF
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {product.description}
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatBadge icon={Package} label="Stock" value={product.stock ?? 'N/A'} />
                <StatBadge icon={Tag} label="SKU" value={product.sku ?? 'N/A'} />
                <StatBadge icon={ShieldCheck} label="Warranty" value={product.warrantyInformation ?? 'N/A'} />
                <StatBadge icon={Truck} label="Shipping" value={product.shippingInformation ?? 'Standard'} />
              </div>

              {/* Return policy */}
              {product.returnPolicy && (
                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <RotateCcw size={16} className="mt-0.5 shrink-0 text-violet-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">
                      Return Policy
                    </p>
                    <p className="text-sm text-gray-600">{product.returnPolicy}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Reviews ── */}
          {product.reviews?.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-5 text-xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {product.reviews.map((review, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900">{review.reviewerName}</span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={11}
                            className={i < review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-gray-200 text-gray-200'}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  )
}

export default ViewPage

