import { ShieldCheck } from "lucide-react";

interface AdminInfoCardProps {
  totalUsers: number;
}

export function AdminInfoCard({ totalUsers }: AdminInfoCardProps) {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Admin Management Guide</h3>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            As an administrator, you have access to manage all {totalUsers} members
            in the system. You can:
          </p>
          <ul className="space-y-2 list-disc pl-4">
            <li>View detailed information about each member</li>
            <li>Edit member profiles and update their information</li>
            <li>Remove members when necessary</li>
            <li>Filter and sort the member list for better organization</li>
          </ul>
          <p>
            Remember to handle member data with care and follow data protection
            guidelines when making changes.
          </p>
        </div>
      </div>
    </div>
  );
}
