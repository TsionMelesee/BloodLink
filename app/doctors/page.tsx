"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDoctors } from "@/data/mock";
import { Button } from "@/components/ui/button";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Contact Hospital Doctors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDoctors.map((doctor) => (
            <Card key={doctor.id}>
              <CardHeader>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.hospital}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Specialization:</span> {doctor.specialization}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Email:</span>{" "}
                    <a href={`mailto:${doctor.email}`} className="text-primary hover:underline">
                      {doctor.email}
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span>{" "}
                    <a href={`tel:${doctor.phone}`} className="text-primary hover:underline">
                      {doctor.phone}
                    </a>
                  </p>
                  <div className="pt-4 flex gap-2">
                    <Button className="flex-1" asChild>
                      <a href={`tel:${doctor.phone}`}>Call</a>
                    </Button>
                    <Button className="flex-1" variant="outline" asChild>
                      <a href={`mailto:${doctor.email}`}>Email</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
