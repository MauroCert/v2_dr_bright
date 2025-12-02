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
    { name: 'Patient Info', href: '/patient-info' },
    { name: 'Membership', href: '/membership' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top bar - Navy */}
      <div className="bg-[var(--navy)]" style={{ color: '#ffffff' }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs tracking-wide">
          {/* Left - Address */}
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" style={{ color: '#ffffff', opacity: 0.8 }} />
            <span className="uppercase font-medium" style={{ color: '#ffffff' }}>5055 E Kentucky Ave, Denver</span>
          </div>
          
          {/* Center - Hours */}
          <div className="hidden md:flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" style={{ color: '#ffffff', opacity: 0.8 }} />
            <span className="uppercase" style={{ color: '#ffffff' }}>Mon 8-5 • Tue-Wed 8-4 • Thu 7-1</span>
          </div>
          
          {/* Right - Phone numbers */}
          <div className="flex items-center gap-4">
            <a
              href="tel:(303) 377-7744"
              className="flex items-center gap-1.5 transition-colors hover:opacity-80"
              style={{ color: '#ffffff' }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>(303) 377-7744</span>
            </a>
            <a
              href="sms:(720) 864-1333"
              className="flex items-center gap-1.5 transition-colors hover:opacity-80"
              style={{ color: '#ffffff' }}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>(720) 864-1333</span>
            </a>
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
        
        <nav className="hidden flex-1 items-center justify-end gap-1 text-sm font-medium text-[var(--text-dark)] lg:flex">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="px-4 py-2 rounded-full transition-colors hover:text-[var(--green)] hover:bg-[var(--light-gray)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:(303) 377-7744"
            className="ml-2 rounded-full bg-[var(--coral)] px-5 py-2.5 text-white font-semibold transition hover:bg-[var(--coral-dark)]"
          >
            Book Now
          </a>
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-full p-2.5 text-[var(--text-dark)] hover:bg-[var(--light-gray)] transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-[var(--border)] bg-white px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-3 text-[var(--text-dark)] hover:bg-[var(--light-gray)] hover:text-[var(--green)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:(303) 377-7744"
              className="mt-2 rounded-full bg-[var(--coral)] px-4 py-3 text-center font-semibold text-white hover:bg-[var(--coral-dark)] transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
