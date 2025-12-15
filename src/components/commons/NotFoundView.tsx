import Link from "next/link"

const NotFoundView = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="text-xl text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="rounded-md border-2 px-6 py-3 text-md font-semibold transition hover:bg-muted"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundView
