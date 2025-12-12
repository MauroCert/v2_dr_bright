'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Info for Patients', href: '/patient-info' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top bar - Navy */}
      <div className="bg-[#1a2e44]" style={{ color: '#ffffff' }}>
        <div className="mx-auto max-w-7xl px-4 py-2.5">
          <div className="flex flex-col items-center gap-2 text-sm md:flex-row md:justify-between">
            {/* Address */}
            <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <MapPin className="h-3.5 w-3.5" />
              <span>5055 E Kentucky Ave, Denver, CO 80246</span>
            </div>
            
            {/* Phone Numbers */}
            <div className="flex items-center gap-4">
              <a
                href="tel:(303) 377-7744"
                className="flex items-center gap-1.5 font-medium transition-colors hover:opacity-80"
                style={{ color: '#ffffff' }}
              >
                <Phone className="h-3.5 w-3.5" />
                Call: (303) 377-7744
              </a>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
              <a
                href="sms:(720) 864-1333"
                className="flex items-center gap-1.5 font-medium transition-colors hover:opacity-80"
                style={{ color: '#ffffff' }}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Text: (720) 864-1333
              </a>
            </div>
            
            {/* Hours */}
            <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <Clock className="h-3.5 w-3.5" />
              <span>Mon 8–5 • Tue 8–4 • Wed 8–4 • Thurs 7–1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/logo.avif" 
            alt="Cherry Creek South Dental" 
            width={220} 
            height={60} 
            priority 
            className="h-14 w-auto" 
          />
        </Link>
        
        <nav className="hidden flex-1 items-center justify-end gap-1 text-sm font-medium text-[#1a1a2e] lg:flex">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="px-4 py-2 rounded-full transition-colors hover:text-[#2d8a5e] hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:(303) 377-7744"
            className="ml-2 rounded-full bg-[#8cc63e] px-5 py-2.5 text-white font-semibold transition hover:bg-[#6ba32e]"
          >
            Schedule Your Appointment
          </a>
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-full p-2.5 text-[#1a1a2e] hover:bg-gray-100 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-3 text-[#1a1a2e] hover:bg-gray-100 hover:text-[#2d8a5e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:(303) 377-7744"
              className="mt-2 rounded-full bg-[#8cc63e] px-4 py-3 text-center font-semibold text-white hover:bg-[#6ba32e] transition-colors"
            >
              Schedule Your Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
