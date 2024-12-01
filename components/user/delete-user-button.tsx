"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DeleteUserButtonProps {
  userId: string;
  userName: string;
}

export function DeleteUserButton({ userId, userName }: DeleteUserButtonProps) {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      router.push("/user");
      router.refresh();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
      setIsDeleting(false);
      setShowConfirmation(false);
    }
  };

  if (showConfirmation) {
    return (
      <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 text-amber-600">
          <AlertCircle className="h-5 w-5" />
          <h4 className="font-semibold">Confirm Delete</h4>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Are you sure you want to delete {userName}&apos;s profile? This action cannot be undone 
          and will permanently remove all user data from our system.
        </p>
        
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowConfirmation(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Yes, Delete User"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={() => setShowConfirmation(true)}
      className="w-full"
    >
      <Trash2 className="w-4 h-4 mr-2" />
      Delete User
    </Button>
  );
}
