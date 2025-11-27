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

  const quickLinks = [
    {
      icon: MapPin,
      label: '5055 E Kentucky Ave, Denver',
      href: 'https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246',
    },
    {
      icon: Clock,
      label: 'Mon 8-5 • Tue-Wed 8-4 • Thu 7-1',
    },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-[0_1px_0_rgba(15,25,32,0.08)]">
      <div className="bg-[var(--pine)] text-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--surface)] hover:text-[var(--clay)]"
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </a>
            ) : (
              <span key={item.label} className="flex items-center gap-2 text-[var(--surface)]/80">
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </span>
            );
          })}
          <div className="flex items-center gap-4 text-[var(--surface)]">
            <a href="tel:(303) 377-7744" className="flex items-center gap-2 hover:text-[var(--clay)]">
              <Phone className="h-3.5 w-3.5" />
              (303) 377-7744
            </a>
            <a href="sms:(720) 864-1333" className="flex items-center gap-2 hover:text-[var(--clay)]">
              <MessageCircle className="h-3.5 w-3.5" />
              (720) 864-1333
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.avif"
              alt="Cherry Creek South Dental"
              width={220}
              height={64}
              priority
              className="h-14 w-auto"
            />
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-[var(--pine)] md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-[var(--shell)] hover:text-[var(--teal)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <a
              href="tel:(303) 377-7744"
              className="rounded-full border border-[var(--teal)] px-4 py-2 text-sm font-semibold text-[var(--teal)] transition hover:bg-[var(--teal)] hover:text-white"
            >
              Call
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-[var(--clay)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--teal)]"
            >
              Request a Visit
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto rounded-full border border-[var(--pine)] p-2 text-[var(--pine)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[var(--shell)] bg-white/95 px-4 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-medium text-[var(--pine)]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-2xl border border-transparent px-3 py-2 hover:border-[var(--shell)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full bg-[var(--clay)] px-4 py-2 text-center font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Visit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
