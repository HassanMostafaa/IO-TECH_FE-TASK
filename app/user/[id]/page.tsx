import axios from "axios";
import { User } from "@/types/user";
import { UserProfile } from "@/components/user/user-profile";
import { UserNotFound } from "@/components/user/user-not-found";
import { AboutUserSection } from "@/components/user/about-user-section";
import { QuickFactsSection } from "@/components/user/quick-facts-section";
import { DangerZoneSection } from "@/components/user/danger-zone-section";
import { redirect } from "next/navigation";

async function getUser(id: string): Promise<User> {
  try {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

export default async function UserPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    redirect("/");
  }

  try {
    const user = await getUser(params.id);
    return (
      <div className="container mx-auto py-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* User Profile Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-sm text-muted-foreground">
                Detailed information about this {user.name}.
              </p>
            </div>
            <UserProfile user={user} />
          </div>

          {/* Additional Info Section */}
          <div className="space-y-8 lg:pl-8 lg:border-l">
            <div className="space-y-6">
              <AboutUserSection user={user} />
              <QuickFactsSection user={user} />
              <DangerZoneSection user={user} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <UserNotFound />;
  }
}
