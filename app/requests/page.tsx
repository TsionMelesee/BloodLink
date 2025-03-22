"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockRequests } from "@/data/mock";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function RequestsPage() {
  const { data: session } = useSession();
  const isDoctor = session?.user?.email === "doctor@hospital.com";
  const [selectedBloodType, setSelectedBloodType] = useState<string>("all");

  const filteredRequests = selectedBloodType === "all" 
    ? mockRequests 
    : mockRequests.filter(request => request.bloodType === selectedBloodType);

  const bloodTypes = ["all", ...new Set(mockRequests.map(r => r.bloodType))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">Blood Requests</h1>
            <div className="flex gap-2">
              {bloodTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedBloodType === type ? "default" : "outline"}
                  onClick={() => setSelectedBloodType(type)}
                  className="capitalize"
                >
                  {type === "all" ? "All Types" : type}
                </Button>
              ))}
            </div>
          </div>
          {isDoctor && (
            <Button asChild>
              <a href="/post-request">Post New Request</a>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((request) => (
            <Card key={request.id} className="relative">
              {request.urgency === "High" && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Blood Type: {request.bloodType}</span>
                  <span 
                    className={`text-sm px-2 py-1 rounded-full ${
                      request.urgency === 'High' 
                        ? 'bg-red-500/10 text-red-500' 
                        : request.urgency === 'Medium'
                        ? 'bg-yellow-500/10 text-yellow-500'
                        : 'bg-green-500/10 text-green-500'
                    }`}
                  >
                    {request.urgency}
                  </span>
                </CardTitle>
                <CardDescription>{request.hospital}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    Location: {request.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Posted: {new Date(request.postedAt).toLocaleString()}
                  </p>
                  <p className="text-sm">
                    {request.details}
                  </p>
                  <p className="text-sm font-medium mt-4">
                    Contact: {request.contact}
                  </p>
                </div>
                {session?.user && session.user.role === "donor" && (
                  <Button className="w-full" asChild>
                    <a href={`tel:${request.contact}`}>Contact Hospital</a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
