import { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProfileFormProps {
  user: User;
  onSubmit: (data: Partial<User>) => void;
  onCancel: () => void;
}

export function ProfileForm({ user, onSubmit, onCancel }: ProfileFormProps) {
  const fields = [
    { id: "name", label: "Name", value: user.name },
    { id: "username", label: "Username", value: user.username },
    { id: "email", label: "Email", value: user.email },
    { id: "phone", label: "Phone", value: user.phone },
    { id: "website", label: "Website", value: user.website },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Partial<User> = {};
    fields.forEach((field) => {
      const value = formData.get(field.id);
      if (value) {
        data[field.id as keyof User] = value as any;
      }
    });
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        {fields.map((field) => (
          <div key={field.id} className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={field.id} className="text-right">
              {field.label}
            </Label>
            <Input
              id={field.id}
              defaultValue={field.value}
              className="col-span-3"
            />
          </div>
        ))}
      </div>
      <DialogFooter className="gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Update</Button>
      </DialogFooter>
    </form>
  );
}
