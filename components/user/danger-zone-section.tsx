"use client";
import { User } from "@/types/user";
import { useState } from "react";
import { DeleteUserButton } from "./delete-user-button";
import { EditProfileDialog } from "./edit-profile-dialog";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useUsersStore } from "@/src/store/useUsersStore";

interface DangerZoneSectionProps {
  user: User;
}

export function DangerZoneSection({ user }: DangerZoneSectionProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { deleteUser, updateUser } = useUsersStore();
  const handleUserDelete = async () => {
    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
      router.push("/");
      setTimeout(() => {
        deleteUser(user.id);
      }, 1000);
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive",
      });
    }
  };

  const handleUpdate = async (updatedData: Partial<User>) => {
    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      updateUser({ ...user, ...updatedData });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      setOpen(false);
      toast({
        title: "Success",
        description: "User updated successfully",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error: User id doesn't exist on server",
        description: "Failed to update user on server although updates will be reflected locally in the store",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-4 mt-4 border-t">
      <h3 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h3>
      <p className="text-xs text-muted-foreground mb-4">
        The actions in this section are irreversible and will permanently affect
        the user&apos;s data. Please proceed with caution as these changes
        cannot be undone.
      </p>
      <div className="flex gap-4 items-center">
        <EditProfileDialog
          user={user}
          open={open}
          onOpenChange={setOpen}
          onUpdate={handleUpdate}
        />
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
