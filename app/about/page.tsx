/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Check, Leaf, User } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
          About Us
        </h1>
        <p className="text-gray-500 md:text-xl max-w-3xl">
          Learn about Sri Dhana Varshini Agro Farms & Developers and our mission
          to provide sustainable investment opportunities through sandalwood
          cultivation.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-gray-500">
            Sri Dhana Varshini Agro Farms & Developers was established in 2015
            with a vision to create sustainable investment opportunities through
            the cultivation of high-value sandalwood trees. Our journey began
            with a small plantation in Nellore District, and has since grown to
            encompass 26.5 acres of premium land dedicated to sandalwood
            cultivation.
          </p>
          <p className="text-gray-500">
            Founded by a team of agricultural experts and investment
            professionals, our company combines traditional farming knowledge
            with modern agricultural techniques to ensure the optimal growth and
            yield of sandalwood trees.
          </p>
          <p className="text-gray-500">
            {`Today, we are proud to offer investors the opportunity to own a piece of our thriving plantation and benefit from the exceptional returns that sandalwood, often referred to as "Green Gold," can provide over a 15-year growth period.`}
          </p>
        </div>
        <div className="relative">
          <img
            src="/trees.jpg?height=400&width=600"
            alt="Sri Dhana Varshini Plantation"
            className="rounded-lg object-cover w-full h-auto"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-green-100 p-3">
                <Leaf className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-500">
                To provide sustainable and profitable investment opportunities
                through ethical sandalwood cultivation, while contributing to
                environmental conservation and rural development.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-green-100 p-3">
                <Award className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-500">
                To become the leading sandalwood plantation company in India,
                recognized for our commitment to sustainability, transparency,
                and delivering exceptional returns to our investors.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Sandalwood */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Why Sandalwood Investment?</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mt-2">
            Sandalwood is one of the most valuable trees in the world, with
            multiple applications and growing demand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">High Value</h3>
              <p className="text-gray-500 text-sm">
                Sandalwood is among the most expensive woods globally, with
                prices consistently rising due to limited supply.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Multiple Uses</h3>
              <p className="text-gray-500 text-sm">
                Used in perfumes, cosmetics, medicines, religious ceremonies,
                and luxury handicrafts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Growing Demand</h3>
              <p className="text-gray-500 text-sm">
                Global demand continues to increase while natural supplies are
                diminishing, creating a favorable market.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Sustainable Asset</h3>
              <p className="text-gray-500 text-sm">
                Environmentally friendly investment that appreciates in value as
                trees mature over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Our Leadership Team</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mt-2">
            Meet the experts behind Sri Dhana Varshini Agro Farms & Developers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <User className="w-full h-full" />
                </div>
                <h3 className="font-bold">Rajesh Kumar</h3>
                <p className="text-green-700 text-sm">Founder & CEO</p>
                <p className="text-gray-500 text-sm mt-2">
                  {` With over 20 years of experience in agriculture and business management, Rajesh leads our company's vision and strategy.`}
                </p>
              </div>
            </CardContent>
          </Card>
          {/* Team Member 2 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  {/* <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  /> */}
                  <User className="w-full h-full" />
                </div>
                <h3 className="font-bold">Priya Sharma</h3>
                <p className="text-green-700 text-sm">Agricultural Director</p>
                <p className="text-gray-500 text-sm mt-2">
                  An expert in sandalwood cultivation with a Ph.D. in
                  Agricultural Sciences, Priya oversees all plantation
                  operations.
                </p>
              </div>
            </CardContent>
          </Card>
          {/* Team Member 3 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <User className="w-full h-full" />
                </div>
                <h3 className="font-bold">Vikram Reddy</h3>
                <p className="text-green-700 text-sm">Investment Relations</p>
                <p className="text-gray-500 text-sm mt-2">
                  With a background in finance and investment management, Vikram
                  helps investors understand the value proposition of
                  sandalwood.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Our Cultivation Process</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mt-2">
            We follow a meticulous process to ensure the healthy growth and
            optimal yield of our sandalwood trees.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <span className="text-xl font-bold text-green-700">1</span>
            </div>
            <h3 className="font-bold mb-2">Site Selection</h3>
            <p className="text-gray-500 text-sm">
              Careful selection of land with optimal soil conditions, water
              availability, and climate for sandalwood growth.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <span className="text-xl font-bold text-green-700">2</span>
            </div>
            <h3 className="font-bold mb-2">Planting & Nurturing</h3>
            <p className="text-gray-500 text-sm">
              Scientific planting techniques with host plants, regular
              irrigation, and organic fertilization.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <span className="text-xl font-bold text-green-700">3</span>
            </div>
            <h3 className="font-bold mb-2">Monitoring & Protection</h3>
            <p className="text-gray-500 text-sm">
              Regular health checks, disease prevention, and 24/7 security to
              protect the valuable trees.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <span className="text-xl font-bold text-green-700">4</span>
            </div>
            <h3 className="font-bold mb-2">Harvesting & Returns</h3>
            <p className="text-gray-500 text-sm">
              Careful harvesting after 15 years when trees reach optimal
              maturity and value distribution to investors.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Our Certifications</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mt-2">
            We adhere to the highest standards of quality and sustainability in
            our operations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold">ISO 9001:2015</h3>
                <p className="text-gray-500 text-sm">
                  Quality Management System
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold">Organic Certification</h3>
                <p className="text-gray-500 text-sm">
                  Sustainable Farming Practices
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-bold">Forest Stewardship Council</h3>
                <p className="text-gray-500 text-sm">
                  Responsible Forest Management
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Invest in Your Future?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Join us in our mission to grow sustainable wealth through sandalwood
          cultivation. Explore our available plots and secure your investment
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-700 hover:bg-green-800" size="lg" asChild>
            <Link href="/plots">View Available Plots</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
