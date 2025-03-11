import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div id="aboutus" className="bg-gray-100 flex flex-col items-center">
      {/* About Us Section */}
      <section className="py-16 text-center w-full gap-6">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Master Renovation Inc.</h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6 px-6">
      At Master Renovation Inc., we specialize in transforming properties into exceptional living spaces. Our team of skilled professionals combines innovation with quality craftsmanship to bring your vision to life. Whether you’re looking for a home renovation, fire restoration, or a ground-up construction project, we are committed to delivering results that exceed expectations. Your satisfaction is our priority, and we ensure every project is completed with precision, on time, and within budget.
    </p>
  </div>
</section>

      {[
        {
          title: "Our Commitment to Excellence",
          text: "With decades of combined experience, we have successfully completed hundreds of projects, ranging from simple home renovations to complex fire restorations and large-scale construction. Our team is dedicated to providing personalized service and achieving the highest standards of quality.",
          imgSrc: "/about/kitchen.jpeg",
          imgAlt: "A modern kitchen renovation by Master Renovation Inc.",
        },
        {
          title: "Our Journey and Growth",
          text: "Starting as a small team of passionate professionals, we have grown into an industry leader with a reputation for excellence. Our growth is driven by a commitment to delivering client-centered service and fostering long-term relationships. We continue to expand while staying true to our values of quality, integrity, and reliability.",
          imgSrc: "/about/washroom.jpeg",
          imgAlt: "A newly renovated washroom by Master Renovation Inc.",
        },
      ].map(({ title, text, imgSrc, imgAlt }, index) => (
        <section
          key={index}
          className="py-16 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 w-full max-w-5xl"
        >
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-700 text-lg">{text}</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      ))}
    </div>
  );
}
