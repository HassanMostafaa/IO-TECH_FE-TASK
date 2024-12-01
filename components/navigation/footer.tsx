export function Footer() {
  return (
    <footer className="border-t">
      <div className="container m-auto px-2 py-4">
        <p className="text-xs md:text-sm font-medium text-foreground/60 text-center md:text-left">
          Built by:{" "}©
          <a
            href="https://github.com/hassanmostafaa/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground/80 underline underline-offset-4"
          >
            Hassan Mohamed
          </a>
          . For{" "}
          <a
            href="https://www.i-o-tech.net/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-800 underline underline-offset-4 "
          >
            IO-Tech Frontend Team
          </a>
        </p>
      </div>
    </footer>
  )
}
