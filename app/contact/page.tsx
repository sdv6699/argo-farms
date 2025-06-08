import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Contact Us
        </h1>
        <p className="text-gray-500 md:text-xl max-w-3xl">
          {` Have questions about our sandalwood plantation investment? Get in touch with our team and we'll be happy to assist you.`}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone Number
                </label>
                <Input id="phone" placeholder="+91 9876543210" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="Investment Inquiry" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="I'm interested in investing in your sandalwood plantation..."
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-green-700 hover:bg-green-800">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-500">
                      Sri Dhana Varshini Agro Farms & Developers
                      <br />
                      Nandipadu Circle, Duttaluru Mandal
                      <br />
                      Nellore District, 524230
                      <br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-500">+91 8989458686</p>
                    <p className="text-gray-500">+91 8374989714</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-500">info@sridhanavarshini.com</p>
                    <p className="text-gray-500">
                      support@sridhanavarshini.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-700 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-500">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123391.48859144428!2d79.8853371!3d14.4425987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cca0e358b27%3A0xf5ed66431d851c89!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1715613000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Dhana Varshini Agro Farms & Developers Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Visit Our Plantation</h3>
            <p className="text-gray-500 mb-4">
              We welcome investors to visit our plantation site. Schedule a
              visit to see the sandalwood trees and learn more about our
              investment opportunity.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
