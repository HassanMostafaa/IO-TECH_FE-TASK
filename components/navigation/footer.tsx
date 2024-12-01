export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-8 mx-auto">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/hassanmostafaa/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Hassan Mohamed
          </a>
          . For{" "}
          <a
            href="https://www.i-o-tech.net/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            IO-Tech Frontend Team
          </a>
        </p>
      </div>
    </footer>
  )
}
