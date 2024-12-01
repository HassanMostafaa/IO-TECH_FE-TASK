import { User } from "@/types/user";
import { BasicInfoCard } from "./basic-info-card";
import { ContactInfoCard } from "./contact-info-card";
import { CompanyInfoCard } from "./company-info-card";
import { DeleteUserButton } from "./delete-user-button";

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="space-y-8">
      <BasicInfoCard user={user} />
      <ContactInfoCard user={user} />
      <CompanyInfoCard user={user} />
    </div>
  );
}
