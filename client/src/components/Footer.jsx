import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const currentRoute =
    location.pathname === '/'
      ? 'Home'
      : location.pathname.slice(1).replaceAll('/', ' > ')

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-4 py-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Copyright {new Date().getFullYear()} Job Trial. All rights reserved.</p>
        <p className="font-medium text-slate-800">Current route: {currentRoute}</p>
      </div>
    </footer>
  )
}

export default Footer