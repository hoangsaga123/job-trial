import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
      <h1 className="text-2xl font-semibold sm:text-3xl">Page not found</h1>
      <p className="text-slate-600">
        The route does not exist. Return to the home page.
      </p>
      <Link
        className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        to="/"
      >
        Back to Home
      </Link>
    </section>
  )
}

export default NotFoundPage