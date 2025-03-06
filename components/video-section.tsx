import Image from "next/image";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-12 px-4  ">
       {/* Header */}
       <div className="text-center mb-12">
          <p className="text-xl text-gray-600 italic mb-2">Take a peek!</p>
          <p className="text-xl text-gray-600 italic">Watch Todoist in action.</p>
          <svg
            className="w-24 h-24 mx-auto text-gray-400"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 80 C 40 60, 60 60, 80 80"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <path d="M80 80 L 70 60" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      <div className="max-w-6xl mx-auto p-2  border rounded-xl border-gray-300">
        {/* Video Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Left - Mobile View */}
          <div className="bg-green-100 rounded-xl p-4">
            <a href="#">
            <Image
              src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1120/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome%2Fvideo-section%2Fen%2Fposter-image.png"
              alt="Mobile Preview"
              width={300}
              height={300}
              className="rounded-lg w-full -h-full"
            />
            </a>
          </div>
          <div className="bg-green-100 rounded-xl p-4">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661963783275-dff88a0296f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mobile Preview"
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
          </div>

          {/* Right - Desktop View */}
          <div className="bg-gray-100 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Desktop Preview"
                width={500}
                height={200}
                className="rounded-lg"
              />
            </div>
           
          </div>
        </div>
        <div className="mt-4 absolute left-1/2 -translate-x-1/2 ">
              <button className="bg-black text-white rounded-full px-6 py-2 flex items-center  ">
                <Play className="w-5 h-7 mr-2" />
                Play
              </button>
            </div>
        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-yellow-100 rounded-xl p-6 flex items-center justify-center">
            <p className="text-xl font-bold">What's Todoist?</p>
          </div>
          <div className="bg-pink-100 rounded-xl p-4">
            <Image
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Illustration"
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
          </div>
          
        </div>
       
      </div>
    </section>
  );
}
