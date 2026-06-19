import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ROUTES } from '@/constants/routes'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import SearchPage from '@/pages/SearchPage'
import ViewPage from '@/pages/ViewPage'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.VIEW} element={<ViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
