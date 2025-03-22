"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockDonors } from "@/data/mock";
import { BloodType } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProfileForm {
  name: string;
  email: string;
  phone: string;
  bloodType: BloodType;
  location: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ProfileForm>();

  useEffect(() => {
    if (!session?.user) {
      router.push("/");
      return;
    }

    const user = mockDonors.find(d => d.email === session.user.email);
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("phone", user.phone || "");
      setValue("bloodType", user.bloodType);
      setValue("location", user.location);
    }
  }, [session, router, setValue]);

  if (!session?.user) {
    return null;
  }

  const onSubmit = (data: ProfileForm) => {
    console.log(data);
    toast.success("Profile updated successfully!");
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast.success("Account deleted successfully!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>
              Manage your donor profile and account settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">Name is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Select {...register("bloodType", { required: true })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
                {errors.bloodType && (
                  <p className="text-sm text-red-500">Blood type is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <p className="text-sm text-red-500">Location is required</p>
                )}
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <Button type="submit" className="w-full">
                  Update Profile
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="w-full"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
