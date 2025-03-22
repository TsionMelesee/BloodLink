"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BloodType } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PostRequestForm {
  bloodType: BloodType;
  urgency: "High" | "Medium" | "Low";
  details: string;
  location: string;
}

export default function PostRequestPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const { register, handleSubmit, formState: { errors } } = useForm<PostRequestForm>();

  useEffect(() => {
    if (session?.user?.email !== "doctor@hospital.com") {
      router.push("/");
    }
  }, [session, router]);

  if (session?.user?.email !== "doctor@hospital.com") {
    return null;
  }

  const onSubmit = (data: PostRequestForm) => {
    console.log(data);
    toast.success("Blood request posted successfully!");
    router.push("/requests");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Post Blood Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type Required</Label>
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
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select {...register("urgency", { required: true })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
                {errors.urgency && (
                  <p className="text-sm text-red-500">Urgency level is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  {...register("location", { required: true })}
                  placeholder="Enter hospital location"
                />
                {errors.location && (
                  <p className="text-sm text-red-500">Location is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Request Details</Label>
                <Textarea
                  id="details"
                  {...register("details", { required: true })}
                  placeholder="Enter additional details about the request"
                  className="min-h-[100px]"
                />
                {errors.details && (
                  <p className="text-sm text-red-500">Details are required</p>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Post Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
