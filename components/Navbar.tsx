"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession();
  const isDoctor = session?.user?.email === "doctor@hospital.com";

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-500">
          BloodLink
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-red-500">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-red-500">
            About Us
          </Link>
          <Link href="/requests" className="text-gray-700 hover:text-red-500">
            Blood Requests
          </Link>
          {isDoctor && (
            <>
              <Link href="/donors" className="text-gray-700 hover:text-red-500">
                View Donors
              </Link>
              <Link href="/post-request" className="text-gray-700 hover:text-red-500">
                Post Request
              </Link>
            </>
          )}
          <Link href="/doctors" className="text-gray-700 hover:text-red-500">
            Contact Doctors
          </Link>

          {!session ? (
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50" onClick={() => signIn()}>
                Sign In
              </Button>
              <Link href="/register">
                <Button variant="destructive">
                  Register as Donor
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/profile">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  Profile
                </Button>
              </Link>
              {isDoctor && (
                <Link href="/post-request">
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                    Post Request
                  </Button>
                </Link>
              )}
              <Button
                variant="destructive"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
