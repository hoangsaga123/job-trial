function PostsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-semibold sm:text-3xl">Posts</h1>
      <p className="text-slate-600">This page is ready for post CRUD actions.</p>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Starter actions</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
          <li>Create a new post</li>
          <li>Edit selected post</li>
          <li>Delete selected post</li>
          <li>Filter posts by category</li>
        </ul>
      </div>
    </section>
  )
}

export default PostsPage