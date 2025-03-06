import { Button } from "@/components/ui/button"

export function ClaritySection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Gain calmness and clarity with the world's most beloved productivity app
        </h2>
        <p className="text-lg text-gray-600 mb-8">374000+ ★★★★★ reviews on Google Play and App Store</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-md">
            Start for free
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download apps
          </button>
        </div>
      </div>
    </section>
  )
}

