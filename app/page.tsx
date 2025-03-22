import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockRequests } from "@/data/mock";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const recentRequests = mockRequests.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.avif"
              alt="Blood donation"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              HELP THE PEOPLE IN NEED
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Welcome To Blood Donors Organization
            </p>
            <Link href="/register">
              <Button size="lg" variant="destructive">
                Become a Donor
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-8 border-red-500">
                <Image
                  src="/images/donation.avif"
                  alt="Blood donation process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Welcome To Blood Donors Organization
                  </h2>
                  <p className="text-muted-foreground">
                    We connect blood donors with those in need, making the process of blood donation simple and efficient.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-red-500 text-2xl">→</span>
                        Good Service
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We provide excellent service to both donors and recipients.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-red-500 text-2xl">→</span>
                        Blood Bank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Connect with local blood banks and hospitals.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-red-500 text-2xl">→</span>
                        Help The People
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Make a difference in your community by donating blood.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-red-500 text-2xl">→</span>
                        Start Donation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Begin your journey as a blood donor today.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-500 text-white py-16">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Save Lives?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community of blood donors today and help those in need.
            </p>
            <Link href="/register">
              <Button size="lg" variant="outline" className="bg-red-500text-white border-white hover:bg-white hover:text-red-500">
                Register Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
