import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 md:py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sri Dhana Varshini</h3>
            <p className="text-green-100 mb-4 text-sm md:text-base">
              Premium sandalwood plantation investment opportunity in Nellore District.
            </p>
            <p className="text-green-100 text-sm md:text-base">An Investment Rooted in Trust and Growth.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link href="/" className="text-green-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plots" className="text-green-100 hover:text-white">
                  Plots
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-300 mt-0.5 shrink-0" />
                <span className="text-green-100">Nandipadu Circle, Duttaluru Mandal, Nellore District, 524230</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-300 shrink-0" />
                <span className="text-green-100">+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-300 shrink-0" />
                <span className="text-green-100">info@sridhanavarshini.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-100 text-sm">
          <p>© {new Date().getFullYear()} Sri Dhana Varshini Agro Farms & Developers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
