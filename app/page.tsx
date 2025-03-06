import Image from "next/image"

import AppleImage from "@/components/assets/apple.png"
import AndroidImage from "@/components/assets/android.png"

import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { TestimonialSection } from "@/components/testimonial-section"
import { TemplatesSection } from "@/components/templates-section"
import { TrustSection } from "@/components/trust-section"
import { VideoSection } from "@/components/video-section"
import { TaskCaptureSection } from "@/components/task-capture-section"
import { ClaritySection } from "@/components/clarity-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Organize your work and life, finally.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Simplify life for both you and your team with the world's #1 task manager and to-do list app.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-semibold">374K+</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600">reviews from</span>
              <Image src={AppleImage} alt="Apple" width={20} height={20} className="ml-1" />
              <Image src={AndroidImage} alt="Android" width={20} height={20} />
            </div>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-md">
              Start for free
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://sjc.microlink.io/M-Nwo6sLJYHOvDckt4Nyvww9CvKl6L89UUe4utLF4rDNupGosGY9w64x9wWecGzALSDbIBFYPxiB-x_zaEvnlA.jpeg"
              alt="Todoist App Interface"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Clarity Section */}
      <ClaritySection />

      {/* Task Capture Section */}
      <TaskCaptureSection />

      {/* Video Section */}
      <VideoSection />

      {/* Templates Section */}
      <TemplatesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

