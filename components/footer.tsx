import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import Image from "next/image";


export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6" >
            <Image src="/favicon.ico" alt="logo" className="mx-2" width={20} height={20} />
              <span className="text-red-500 text-xl font-bold">todoist</span>
            </Link>
            <p className="text-gray-600 mb-6">Join millions of people who organize work and life with Todoist.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features/how-it-works" className="text-gray-600 hover:text-gray-900">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/features/for-teams" className="text-gray-600 hover:text-gray-900">
                  For Teams
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-600 hover:text-gray-900">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/download-apps" className="text-gray-600 hover:text-gray-900">
                  Download Apps
                </Link>
              </li>
              <li>
                <Link href="/resources/help-center" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources/productivity-methods" className="text-gray-600 hover:text-gray-900">
                  Productivity Methods
                </Link>
              </li>
              <li>
                <Link href="/resources/productivity-methods" className="text-gray-600 hover:text-gray-900">
                  Productivity Methods
                </Link>
              </li>
              <li>
                <Link href="/resources/integrations" className="text-gray-600 hover:text-gray-900">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/resources/channel-partners" className="text-gray-600 hover:text-gray-900">
                  Channel Partners
                </Link>
              </li>
              <li>
                <Link href="/resources/developer-api" className="text-gray-600 hover:text-gray-900">
                  Developer API
                </Link>
              </li>
              <li>
                <Link href="/resources/status" className="text-gray-600 hover:text-gray-900">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about-us" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-gray-600 hover:text-gray-900">
                  Careers{" "}
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">We're hiring!</span>
                </Link>
              </li>
              <li>
                <Link href="/company/inspiration-hub" className="text-gray-600 hover:text-gray-900">
                  Inspiration Hub
                </Link>
              </li>
              <li>
                <Link href="/company/press" className="text-gray-600 hover:text-gray-900">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/company/twist" className="text-gray-600 hover:text-gray-900">
                  Twist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end mt-12">
          <div className="flex space-x-4">
            <Link href="https://twitter.com/todoist" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://youtube.com/todoist" className="text-gray-600 hover:text-gray-900">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://facebook.com/todoist" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com/todoist" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

