"use client";
import axios from "axios";
import { User } from "@/types/user";
import { UserProfile } from "@/components/user/user-profile";
import { UserNotFound } from "@/components/user/user-not-found";
import { AboutUserSection } from "@/components/user/about-user-section";
import { QuickFactsSection } from "@/components/user/quick-facts-section";
import { DangerZoneSection } from "@/components/user/danger-zone-section";
import { getBaseUrl } from "@/lib/utils/get-base-url";
import { useUsersStore } from "@/src/store/useUsersStore";
import { useEffect } from "react";

async function getUser(id: string): Promise<User> {
  try {
    const response = await axios.get(`${getBaseUrl()}/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

export default function UserPage({ params }: { params: { id: string } }) {
  const { setCurrentUser, currentUser, setLoading, isLoading, users } =
    useUsersStore();

  useEffect(() => {
    if (!currentUser && !users) {
      (async () => {
        setLoading(true);
        setCurrentUser(await getUser(params.id));
        setLoading(false);
      })();
    }
    if (currentUser && users) {
      setCurrentUser(users.filter((u) => u.id === Number(params.id))[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentUser) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  try {
    return (
      <div className="container mx-auto py-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* User Profile Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-sm text-muted-foreground">
                Detailed information about this {currentUser.name}.
              </p>
            </div>
            <UserProfile user={currentUser} />
          </div>

          {/* Additional Info Section */}
          <div className="space-y-8 lg:pl-8 lg:border-l">
            <div className="space-y-6">
              <AboutUserSection user={currentUser} />
              <QuickFactsSection user={currentUser} />
              <DangerZoneSection user={currentUser} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <UserNotFound />;
  }
}
