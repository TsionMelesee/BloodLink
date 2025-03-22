"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDonors } from "@/data/mock";
import { BloodType } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DonorsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [selectedType, setSelectedType] = useState<string>("all");
  const bloodTypes: BloodType[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  useEffect(() => {
    if (session?.user?.email !== "doctor@hospital.com") {
      router.push("/");
    }
  }, [session, router]);

  if (session?.user?.email !== "doctor@hospital.com") {
    return null;
  }

  const filteredDonors = selectedType === "all" 
    ? mockDonors 
    : mockDonors.filter(donor => donor.bloodType === selectedType);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Registered Blood Donors</h1>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              className="min-w-[60px]"
              onClick={() => setSelectedType("all")}
            >
              All
            </Button>
            {bloodTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className="min-w-[60px]"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <Card key={donor.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{donor.name}</span>
                  <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {donor.bloodType}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Location: {donor.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last Donation: {donor.lastDonation ? new Date(donor.lastDonation).toLocaleDateString() : 'Never'}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Email:</span>{" "}
                    <a href={`mailto:${donor.email}`} className="text-primary hover:underline">
                      {donor.email}
                    </a>
                  </p>
                  {donor.phone && (
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span>{" "}
                      <a href={`tel:${donor.phone}`} className="text-primary hover:underline">
                        {donor.phone}
                      </a>
                    </p>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  {donor.phone && (
                    <Button className="flex-1" asChild>
                      <a href={`tel:${donor.phone}`}>Call</a>
                    </Button>
                  )}
                  <Button className="flex-1" variant="outline" asChild>
                    <a href={`mailto:${donor.email}`}>Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
