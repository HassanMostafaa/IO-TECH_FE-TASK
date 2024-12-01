interface RegisterHeadingProps {
  title?: string
  description?: string
}

export function RegisterHeading({
  title = "Create an Account",
  description = "Join IO-Tech and unlock exclusive features for our community members."
}: RegisterHeadingProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
