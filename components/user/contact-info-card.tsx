import { Mail, MapPin, Phone } from "lucide-react";
import { User } from "@/types/user";

interface ContactInfoCardProps {
  user: User;
}

export function ContactInfoCard({ user }: ContactInfoCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
      <h3 className="font-semibold text-lg">Contact Information</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </span>
        </div>
      </div>
    </div>
  );
}
