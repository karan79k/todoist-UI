import Image from "next/image"

import test1 from "./assets/test1.png";
import test2 from "./assets/test2.png";
import test3 from "./assets/test3.png";

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
            
            <p className="text-lg italic text-gray-700 mb-4">"Simple, straightforward, and super powerful"</p>
              <div className="absolute -top-8 -left-8 text-yellow-400 text-4xl">✦</div>
             
            </div>
            <Image
                src={test1}
                alt="The Verge"
                width={100}
                height={40}
                className="mx-auto "
              />
          </div>

          <div className="flex flex-col items-center text-center">
           
            <p className="text-lg italic text-gray-700 mb-4">"The best to-do list app on the market"</p>
            <Image
              src={test2}
              alt="PC Mag"
              width={40}
              height={20}
              className="mb-6 my-4 mx-auto"
            />
          </div>

          <div className="flex flex-col items-center text-center">
           
            <p className="text-lg italic text-gray-700 mb-4">"Nothing short of stellar"</p>
            <div className="relative mb-6">
              
              <Image
                src={test3}
                alt="TechRadar"
                width={120}
                height={40}
                className="mx-auto my-4"
              />
             
            </div> <div className="absolute -top-8 -right-8 text-yellow-400 text-4xl ">✦</div>
          </div>
        </div>
      </div>
    </section>
  )
}

