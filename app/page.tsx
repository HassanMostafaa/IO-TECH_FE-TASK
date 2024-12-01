import { User } from "@/types/user";
import { UsersTable } from "@/components/user/users-table";
import { AdminInfoCard } from "@/components/user/admin-info-card";
import axios from "axios";

async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
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

export async function generateMetadata() {
  return {
    title: "Admin Dashboard | IO TECH",
    description: "Manage and view all members in the system",
  };
}
