import { Globe, User as UserIcon } from "lucide-react";
import { User } from "@/types/user";

interface BasicInfoCardProps {
  user: User;
}

export function BasicInfoCard({ user }: BasicInfoCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
          <UserIcon className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Globe className="h-4 w-4" />
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {user.website}
          </a>
        </div>
      </div>
    </div>
  );
}
