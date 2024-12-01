"use client";

import { Button } from "@/components/ui/button";
import { Home, UserX } from "lucide-react";
import Link from "next/link";

export function UserNotFound() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
        <div className="rounded-full p-4">
          <UserX className="w-12 h-12" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold">User Not Found</h3>
          <div className="text-sm text-muted-foreground">
            We couldn&apos;t find the user information you&apos;re looking for.
          </div>
        </div>
        <Link href="/user">
          <Button variant="outline" size="sm">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
