"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { DeleteUserDialog } from "./delete-user-dialog";

interface DeleteUserButtonProps {
  userId: number;
  userName: string;
  onDelete: () => void;
  variant?: "table" | "profile";
}

export function DeleteUserButton({
  userId,
  userName,
  onDelete,
  variant = "table",
}: DeleteUserButtonProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await fetch(`/api/users/${userId}`, { method: "DELETE" });
      onDelete();
    } catch (error) {
      console.error("Failed to delete user:", error);
    } finally {
      setIsDeleting(false);
      setShowConfirmation(false);
    }
  };

  return (
    <>
      <Button
        variant="destructive"
        size={variant === "profile" ? "default" : "sm"}
        onClick={() => setShowConfirmation(true)}
      >
        <Trash2 className="h-4 w-4" />
        {variant === "profile" && <span className="ml-2">Delete User</span>}
      </Button>

      <DeleteUserDialog
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
        userName={userName}
      />
    </>
  );
}
