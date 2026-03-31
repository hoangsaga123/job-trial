function CategoriesPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-semibold sm:text-3xl">Categories</h1>
      <p className="text-slate-600">
        Use this route to handle category CRUD operations.
      </p>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Starter actions</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
          <li>Create a new category</li>
          <li>Rename category</li>
          <li>Delete category</li>
          <li>Count posts per category</li>
        </ul>
      </div>
    </section>
  )
}

export default CategoriesPage