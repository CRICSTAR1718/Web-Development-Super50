import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { Search, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchText.trim()) {
      navigate(`${ROUTES.SEARCH}?q=${encodeURIComponent(searchText.trim())}`)
      setSearchText('')
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-6">


          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="flex shrink-0 items-center gap-2 no-underline hover:opacity-80 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
              <ShoppingBag size={16} className="text-white" />
            </div>
            <span className="hidden font-bold text-base text-gray-900 sm:block">
              CricStar<span className="text-violet-600">Shop</span>
            </span>
          </Link>

          {/* Search Form — takes all remaining space */}
          <form
            onSubmit={handleSearch}
            className="flex flex-1 items-center gap-2"
          >
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                id="navbar-search"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search products…"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
            <button
              type="submit"
              id="navbar-search-btn"
              className="shrink-0 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-violet-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            >
              Search
            </button>
          </form>

        </div>
      </div>
    </header>
  )
}

export default Navbar
