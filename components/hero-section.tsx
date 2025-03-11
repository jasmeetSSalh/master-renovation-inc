"use client"
import { Button } from "@/components/ui/button";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { ShineBorder } from "@/components/ui/shine-border";
import { Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 border border-white/10 rounded-xl overflow-hidden">
        <div className="relative">
        <Image
          src="/hero-images/hero-image-1.jpg"
          alt="Background Gradient"
          width={1920}
          height={1080}
          className="w-auto h-screen sm:w-full sm:h-auto object-cover mx-auto"
          priority
        />

          <div className="absolute inset-0 flex items-center sm:items-center  sm:w-full sm:h-full sm:pt-6 justify-center pb-6 sm:pb-16">

            <div className="bg-black/50 p-4  rounded-xl w-[95%] h-[99%] mt-3 flex items-center justify-center">

              <div className="text-center">

                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6 tracking-tight text-white">
                  Transform Your Home, <br className="hidden sm:block" /> Elevate Your Living
                </h1>
                <p className="text-white text-sm sm:text-lg mb-4 sm:mb-8 max-w-md sm:max-w-xl mx-auto">
                  From dream designs to stunning renovations, we bring expert craftsmanship and
                  quality to every project. Let’s build the home you’ve always wanted.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 border-white/10 text-white bg-white/5 hover:bg-white hover:text-black">
                    <Play className="w-4 h-4" />
                    <a href="#contact">Get a Free Estimate</a>
                    
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-100"
                  >
                    <a href="#services">View Our Work</a>
                    
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </ShineBorder>
    </section>
  );
}
