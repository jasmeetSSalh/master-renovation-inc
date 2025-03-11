import Image from "next/image";

export default function Services() {
  return (
    <div className="space-y-32">
      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {[
              { title: "Legal Basements", img: "/services/legal_basement.jpg" },
              { title: "Design and Build Custom House", img: "/services/Custom_Home.jpg" },
              { title: "Home Renovation with Extension", img: "/services/home_extension.webp" },
              { title: "Commercial Renovation", img: "/services/commerical_renovation.webp" },
              { title: "New Foundation", img: "/services/foundation.jpg" },
              { title: "Additional Residential Units - Garden Suites", img: "/services/garden_suite.jpg" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
