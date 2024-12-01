"use client"
import { User } from "@/types/user";
import { DeleteUserButton } from "./delete-user-button";

interface DangerZoneSectionProps {
  user: User;
}

export function DangerZoneSection({ user }: DangerZoneSectionProps) {
  const handleUserDelete = () => {
    console.log("delete user", { user });
  };

  return (
    <div className="pt-4 mt-4 border-t">
      <h3 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h3>
      <p className="text-xs text-muted-foreground mb-4">
        The actions in this section are irreversible and will permanently affect
        the user&apos;s data. Please proceed with caution as these changes
        cannot be undone.
      </p>
      <div className="max-w-fit">
        <DeleteUserButton
          userId={user.id}
          variant="profile"
          userName={user.name}
          onDelete={handleUserDelete}
        />
      </div>
    </div>
  );
}
