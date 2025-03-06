"use client"
import Image from "next/image"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 py-4 px-4">
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-10">
           <Image src="/favicon.ico" alt="logo" className="mx-2" width={20} height={20} />
            <span className="text-red-500 text-2xl font-bold">todoist</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 hover:text-gray-900">
              Features
            </Link>
            <Link href="/for-teams" className="text-gray-700 hover:text-gray-900">
              For Teams
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-10">
                <Link
                  href="/resources/download"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Download Apps
                </Link>
                <Link
                  href="/resources/templates"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Templates
                </Link>
                <Link
                  href="/resources/integrations"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Integrations
                </Link>
              </div>
            </div>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            Log in
          </Link>
          <Button className="bg-red-500 hover:bg-red-600 text-white">Start for free</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-20 border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/features" className="text-gray-700 hover:text-gray-900 py-2">
              Features
            </Link>
            <Link href="/for-teams" className="text-gray-700 hover:text-gray-900 py-2">
              For Teams
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-gray-900 py-2">
              Resources
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 py-2">
              Pricing
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-gray-900 py-2">
              Log in
            </Link>
            <Button className="bg-red-500 hover:bg-red-600 text-white w-full">Start for free</Button>
          </div>
        </div>
      )}
    </header>
  )
}

