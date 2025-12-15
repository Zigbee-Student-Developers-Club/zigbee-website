import Link from "next/link"

const UnauthorizedView = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-5xl font-bold">401</h1>

      <p className="text-base text-muted-foreground">
        You are not authorized to access this page.
      </p>

      <Link
        href="/"
       className="rounded-md border-2 px-6 py-3 text-md font-semibold transition hover:bg-muted"
      >
        Go back to Home
      </Link>
    </div>
  )
}

export default UnauthorizedView
