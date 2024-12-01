import { Building2 } from "lucide-react";
import { User } from "@/types/user";

interface CompanyInfoCardProps {
  user: User;
}

export function CompanyInfoCard({ user }: CompanyInfoCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
      <h3 className="font-semibold text-lg">Company Details</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{user.company.name}</span>
        </div>
        <p className="text-sm text-muted-foreground">{user.company.catchPhrase}</p>
        <p className="text-sm text-muted-foreground italic">{user.company.bs}</p>
      </div>
    </div>
  );
}
