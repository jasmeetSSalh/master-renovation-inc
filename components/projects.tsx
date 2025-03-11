import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Projects() {
  return (
    <div  className="space-y-32">
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Luxury Kitchen", img: "/projects/kitchen.jpg" },
              { title: "Modern Bathroom", img: "/projects/bathroom.jpg" },
              { title: "Living Room Upgrade", img: "/projects/living-room.jpg" },
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image src={project.img} alt={project.title} width={400} height={250} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}