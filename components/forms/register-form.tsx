"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getBaseUrl } from "@/lib/utils/get-base-url";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(255, "Username must be less than 255 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
  phone: z.string(),
  "admin-user": z.boolean().default(true).optional(),
});

export type RegisterFormValues = z.infer<typeof formSchema>;

export function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "admin-user": true,
    },
  });
  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(values: RegisterFormValues) {
    try {
      await axios.post(`${getBaseUrl()}/api/users`, {
        email: values.email,
        username: values.username,
        password: values.password,
        phone: values.phone,
        isAdmin: values["admin-user"],
      });
      toast({
        title: "Success",
        description: "User created successfully",
      });
      router.push("/");
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        title: "Register Error",
        description: "Failed to create user. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe"
                  type="text"
                  autoComplete="username"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@ex.com"
                  type="email"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder="XX - XXX - XXXX"
                  {...field}
                  defaultCountry="AE"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* THIS CAN BE CONDITIONED TO BE VISIBLE ONLY IF WE ARE ADMINS */}
        <FormField
          control={form.control}
          name="admin-user"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Admin user</FormLabel>
                <FormDescription>
                  This will be a user with more permissions.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-1/2 xl:w-fit text-md">
          Submit
        </Button>
      </form>
    </Form>
  );
}
