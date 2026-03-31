import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout