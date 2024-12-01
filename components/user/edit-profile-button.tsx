"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import { Edit } from "lucide-react";
import { useState } from "react";
import { EditProfileModal } from "./edit-profile-modal";

interface EditProfileButtonProps {
  user: User;
}

export function EditProfileButton({ user }: EditProfileButtonProps) {
  const [open, setOpen] = useState(false);

  const handleUpdate = () => {
    console.log("Update user:", user);
    setOpen(false);
  };

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Edit className="h-4 w-4 mr-2" />
        Edit Profile
      </Button>

      <EditProfileModal
        user={user}
        open={open}
        onOpenChange={setOpen}
        onUpdate={handleUpdate}
      />
    </>
  );
}
