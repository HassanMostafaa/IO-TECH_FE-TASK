import { Shield, UserPlus, Zap } from "lucide-react"

const features = [
  {
    icon: UserPlus,
    title: "Quick Registration",
    description: "Complete your registration in less than 2 minutes with our streamlined process. We have simplified every step to get you started quickly."
  },
  {
    icon: Shield,
    title: "Secure Account",
    description: "Your data is protected with industry-standard encryption and security measures. We prioritize your privacy and data protection at every step."
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Get immediate access to all features once your registration is complete. No waiting periods - start exploring right away."
  }
]

export function FeaturesSection() {
  return (
    <div className="grid gap-6">
      {features.map((feature, index) => (
        <div key={index} className="grid gap-1">
          <div className="flex items-center gap-2">
            <feature.icon className="h-5 w-5" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </div>
          <p className="text-muted-foreground">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
