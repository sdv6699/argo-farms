/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Leaf, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-2">
                Premium Sandalwood Plantation
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Sri Dhana Varshini Agro Farms & Developers
              </h1>
              <p className="text-lg md:text-xl text-gray-500 md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                An Investment Rooted in Trust and Growth
              </p>
              <p className="text-gray-500">
                Own a 8-cent plot for just ₹4,99,999 and watch your investment
                skyrocket over the next 15 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  className="bg-green-700 hover:bg-green-800"
                  size="lg"
                  asChild
                >
                  <Link href="/plots">
                    View Available Plots <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                   <Link href="/contact">
                  Contact Us
                    </Link> 
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0 lg:ml-auto">
              <img
                src="/plantation.webp?height=400&width=600"
                alt="Sandalwood Plantation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 md:py-16 lg:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                About Our Plantation
              </h2>
              <p className="text-gray-500 text-base md:text-lg lg:text-xl/relaxed">
                Sri Dhana Varshini Agro Farms & Developers presents a premium,
                fully gated sandalwood plantation venture in Nandipadu Circle,
                Duttaluru Mandal, Nellore District, 524230, spread across 26.5
                acres.
              </p>
              <p className="text-gray-500 text-base md:text-lg">
                {`Sandalwood, known as "Green Gold," holds immense value in
                perfumes, medicine, cosmetics, and spiritual rituals. With
                global demand and limited cultivation, it promises high returns.`}
              </p>
            </div>
            <div className="space-y-4 mt-6 lg:mt-0 lg:ml-auto">
              <img
                src="/trees.jpg?height=400&width=600"
                alt="Sandalwood Trees"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 lg:py-24 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Why Invest With Us?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 text-base md:text-lg lg:text-xl/relaxed">
                Discover the benefits of investing in our sandalwood plantation
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-12 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3">
                <Leaf className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center">
                Sustainable Investment
              </h3>
              <p className="text-center text-gray-500 text-sm md:text-base">
                Eco-friendly investment that grows naturally with minimal
                environmental impact.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm">
              <div className="rounded-full bg-green-100 p-3">
                <TrendingUp className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center">
                High Returns
              </h3>
              <p className="text-center text-gray-500 text-sm md:text-base">
                Watch your investment grow exponentially over the next 15 years
                with high-value sandalwood.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm sm:col-span-2 md:col-span-1">
              <div className="rounded-full bg-green-100 p-3">
                <Shield className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center">
                Secure & Managed
              </h3>
              <p className="text-center text-gray-500 text-sm md:text-base">
                Fully gated plantation with expert maintenance and legal
                transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-10 md:py-16 lg:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                Investment Details
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                  <span className="text-base md:text-lg">
                    8-cent plot for just ₹4,99,999
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                  <span className="text-base md:text-lg">
                    26.5 acres of premium land in Badvel
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                  <span className="text-base md:text-lg">
                    Secured fencing and expert maintenance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                  <span className="text-base md:text-lg">
                    Legal transparency and documentation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-700 mt-0.5 shrink-0" />
                  <span className="text-base md:text-lg">
                    High returns over 15-year growth period
                  </span>
                </li>
              </ul>
              <div className="pt-4">
                <Button
                  className="bg-green-700 hover:bg-green-800 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/plots">
                    Explore Available Plots{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 mt-6 lg:mt-0 lg:ml-auto">
              <img
                src="/invest.png?height=400&width=600"
                alt="Investment Growth"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 lg:py-24 bg-green-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Ready to Grow Your Wealth Naturally?
              </h2>
              <p className="mx-auto max-w-[700px] text-green-100 text-base md:text-lg lg:text-xl/relaxed">
                Join us in growing wealth naturally—invest in the future with
                Sri Dhana Varshini!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                className="bg-white text-green-700 hover:bg-green-100 w-full sm:w-auto"
                size="lg"
                asChild
              >
                <Link href="/plots">View Available Plots</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white text-green-700 hover:bg-green-100 w-full sm:w-auto"
                size="lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
