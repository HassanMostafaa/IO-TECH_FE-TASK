import { User } from "@/types/user";

interface AboutUserSectionProps {
  user: User;
}

export function AboutUserSection({ user }: AboutUserSectionProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold">About {user.name}</h2>
      <p className="text-muted-foreground">
        {user.name} is a member of our community working at {user.company.name}.
        They specialize in {user.company.bs} and are dedicated to{" "}
        {user.company.catchPhrase}.
      </p>
    </div>
  );
}
