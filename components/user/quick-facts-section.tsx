import { User } from "@/types/user";

interface QuickFactsSectionProps {
  user: User;
}

export function QuickFactsSection({ user }: QuickFactsSectionProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="font-semibold mb-4">Quick Facts</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>• Based in {user.address.city}</li>
        <li>• Professional website at {user.website}</li>
        <li>• Part of {user.company.name}</li>
        <li>• Contact via {user.email}</li>
      </ul>
    </div>
  );
}
