import { Link } from 'react-router-dom'

const quickLinks = [
  {
    title: 'Manage Posts',
    description: 'Create, edit, and organize post records.',
    to: '/posts',
  },
  {
    title: 'Manage Categories',
    description: 'Prepare category data for your CRUD test.',
    to: '/categories',
  },
  {
    title: 'Manage Users',
    description: 'Review and update user records quickly.',
    to: '/users',
  },
]

function HomePage() {
  return (
    <section className="space-y-5">
      <div className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Welcome to your CRUD starter</h1>
        <p className="mt-2 text-slate-600">
          This home page gives you a ready structure for frontend practice with
          persistent layout, route pages, and quick navigation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((item) => (
          <article key={item.to} className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            <Link
              className="mt-4 inline-flex rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
              to={item.to}
            >
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomePage