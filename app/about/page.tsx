import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-white">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <div className="flex items-center gap-2 text-lg">
              <Link href="/" className="hover:text-red-300">
                Home
              </Link>
              <span>→</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-8 border-red-500">
              <Image
                src="/images/about-content.jpg"
                alt="Blood donation process"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-red-500 font-bold text-xl">HELP THE PEOPLE IN NEED</h2>
              <h3 className="text-4xl font-bold">
                Welcome To Blood Donors Organization
              </h3>
              <p className="text-muted-foreground">
                We are dedicated to connecting blood donors with those in need,
                making the process of blood donation simple and efficient. Our
                platform brings together donors, hospitals, and those requiring
                blood transfusions in a seamless and organized manner.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-2xl">→</span>
                    <span className="font-medium">Quick Registration</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Register as a donor in minutes
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-2xl">→</span>
                    <span className="font-medium">Blood Bank</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Connect with local blood banks
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-2xl">→</span>
                    <span className="font-medium">Help People</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Make a difference in your community
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-2xl">→</span>
                    <span className="font-medium">Start Donation</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Begin your journey as a donor
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/register">
                  <Button variant="destructive" size="lg">
                    Become a Donor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
