import { Metadata } from "next";
import { User } from "@/types/user";
import { UsersTable } from "@/components/user/users-table";
import { AdminInfoCard } from "@/components/user/admin-info-card";
import axios from "axios";
import { getBaseUrl } from "@/lib/utils/get-base-url";

// This makes the page dynamic instead of static
export const dynamic = 'force-dynamic';

async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get(`${getBaseUrl()}/api/users`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="flex items-center justify-between mb-8 border-b pb-2">
        <div>
          <h1 className="text-3xl font-bold mb-2"> Members</h1>
          <p className="text-muted-foreground">
            Manage {users.length} members in the system
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          <UsersTable initialUsers={users} />

          <AdminInfoCard totalUsers={users.length} />
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin Dashboard | IO TECH",
    description: "Manage and view all members in the system",
  };
}
