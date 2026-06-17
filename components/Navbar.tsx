'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', page: '/', section: 'home' },
    { label: 'Services', page: '/services', section: 'services' },
    { label: 'About', page: '/about', section: 'about' },
    { label: 'Contact', page: '/contact', section: 'contact' },
  ];

  // 🔹 Helper function (avoids duplication)
  const getHref = (link: typeof navLinks[number]) => {
    const isHome = pathname === '/';

    // Special case for Home
    if (link.label === 'Home') {
      return isHome ? '#home' : '/';
    }

    return isHome ? `#${link.section}` : link.page;
  };

  return (
    <nav className="bg-hero-bg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-28">

          {/* Logo */}
         
        <Link href="/" className="flex items-center gap-4">
  <Image
    src="/assests/logo.png"
    alt="Avinash Dental Care Logo"
    width={100}
    height={100}
    priority
    className="object-contain"
  />

  {/* <div className="leading-tight">
    <h1 className="text-lg md:text-2xl font-bold text-gray-800">
      Avinash Dental Care
    </h1>

    <p className="text-sm text-primary font-medium">
      Advanced Dental & Implant Center
    </p>
  </div> */}
  <div className="flex flex-col">
  <h1 className="text-lg sm:text-xl md:text-3xl font-extrabold text-gray-900 leading-tight">
    Avinash Dental Care
  </h1>

  <div className="flex items-center gap-2">
    <div className="w-8 h-[2px] bg-primary rounded-full" />

    <p className="text-xs sm:text-sm md:text-base font-semibold text-primary">
      Advanced Dental & Implant Center
    </p>
  </div>
</div>

</Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={getHref(link)}
                className="text-gray-700 hover:text-primary font-extrabold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="#appointment"
              className="hidden md:inline-flex bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm font-medium"
            >
              Book Appointment
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={getHref(link)}
                  className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="#appointment"
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm font-medium text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}