const benefits = [
  "Advanced development tools and resources",
  "Collaborative community of developers",
  "Regular updates and new features",
  "Dedicated support team"
]

export function WhyChooseSection() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <h4 className="font-semibold mb-2">Why Choose IO-Tech?</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {benefits.map((benefit, index) => (
          <li key={index}>• {benefit}</li>
        ))}
      </ul>
    </div>
  )
}
