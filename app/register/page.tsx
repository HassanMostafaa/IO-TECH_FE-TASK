import { RegisterForm } from "@/components/forms/register-form";
import { FeaturesSection } from "@/components/register/features-section";
import { RegisterHeading } from "@/components/register/register-heading";
import { WhyChooseSection } from "@/components/register/why-choose-section";

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <RegisterHeading />
          <RegisterForm />
        </div>

        <div className="space-y-8 lg:pl-8 lg:border-l">
          <FeaturesSection />
          <WhyChooseSection />
        </div>
      </div>
    </div>
  );
}
