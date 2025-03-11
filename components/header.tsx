"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";

export function Header() {
  // State to manage the sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle closing the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/master-renovation-logo.png" alt="Master Renovation Inc." width={150} height={150} />
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" onClick={() => setIsOpen(true)}>
                <FiMenu size={24} className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white w-64 p-6">
              <nav className="flex flex-col gap-4">
                <a href="#about" className="text-sm hover:text-gray-400 transition-colors" onClick={closeSidebar}>
                  About Us
                </a>
                <a href="#services" className="text-sm hover:text-gray-400 transition-colors" onClick={closeSidebar}>
                  Services
                </a>
                <a href="#projects" className="text-sm hover:text-gray-400 transition-colors" onClick={closeSidebar}>
                  Projects
                </a>
                <a href="#contact" className="text-sm hover:text-gray-400 transition-colors" onClick={closeSidebar}>
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#aboutus" className="text-sm text-gray-300 hover:text-white transition-colors">
            About Us
          </a>
          <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">
            Services
          </a>
          <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
