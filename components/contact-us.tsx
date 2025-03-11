"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = (): JSX.Element => {
  return (
    <div className="space-y-32">
      <section id="contact" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 text-lg mb-8">
            Get in touch with us for a free consultation and let's bring your vision to life!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-800">
            {[
              { Icon: Mail, text: "masterrenovation@gmail.com", link: "mailto:masterrenovation@gmail.com" },
              { Icon: Phone, text: "(647)-778-2571", link: "tel:+16477782571" },
              { Icon: MapPin, text: "21 Stalbridge Ave., Brampton, Ontario" },
            ].map(({ Icon, text, link }, index) => (
              <p
                key={index}
                className="flex items-center justify-center gap-2 transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  if (link) {
                    window.location.href = link; // Open the mail or phone app
                  } else {
                    navigator.clipboard.writeText(text); // Copy to clipboard (for address)
                  }
                }}
              >
                <Icon className="w-5 h-5 text-gray-600" /> {text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
