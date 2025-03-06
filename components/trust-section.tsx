import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-red-500 font-medium mb-4">In it for the long haul</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A task manager you can trust for life</h2>
          <p className="text-lg text-gray-600 mb-6">
            We've been building Todoist for 18 years and 37 days. Rest assured that we'll never sell out to the highest
            bidder.
          </p>
          <Link href="/mission" className="text-blue-600 hover:underline flex items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Read about our long-term mission
          </Link>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-md">
            Start for free
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100+ million</div>
            <div className="text-gray-600">downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2+ billion</div>
            <div className="text-gray-600">tasks completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">160+ countries</div>
            <div className="text-gray-600">worldwide</div>
          </div>
        </div>
      </div>
    </section>
  )
}

