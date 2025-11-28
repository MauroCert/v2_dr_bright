import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hours = [
    { day: 'Mon', hours: '8:00 AM – 5:00 PM' },
    { day: 'Tue', hours: '8:00 AM – 4:00 PM' },
    { day: 'Wed', hours: '8:00 AM – 4:00 PM' },
    { day: 'Thu', hours: '7:00 AM – 1:00 PM' },
    { day: 'Fri', hours: 'Closed' },
    { day: 'Sat', hours: 'Closed' },
    { day: 'Sun', hours: 'Closed' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Patient Info', href: '/patient-info' },
    { label: 'Membership', href: '/membership' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="mt-24 border-t border-[var(--shell)] bg-[var(--surface)] text-[var(--pine)]">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[var(--sage)]">Cherry Creek South Dental</p>
            <h3 className="mt-3 text-3xl font-semibold">Ready for a calm dental visit?</h3>
            <p className="mt-2 text-sm text-[var(--soft-text)]">Text, call, or plan a visit online—whatever feels easiest.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:(303) 377-7744" className="rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white">
              Call (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="rounded-full border border-[var(--pine)] px-6 py-3 text-sm font-semibold text-[var(--pine)]"
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.4em] text-[var(--sage)]">Visit us</h4>
            <p className="text-2xl font-semibold">5055 E Kentucky Ave, Denver</p>
            <p className="text-sm text-[var(--soft-text)]">Atrium suite near Cherry Creek Trail with free parking.</p>
            <div className="space-y-2 text-sm">
              <a
                href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--pine)] hover:text-[var(--clay)]"
              >
                <MapPin className="h-4 w-4 text-[var(--clay)]" />
                Get Directions
              </a>
              <a href="tel:(303) 377-7744" className="flex items-center gap-2 hover:text-[var(--clay)]">
                <Phone className="h-4 w-4 text-[var(--clay)]" />
                (303) 377-7744
              </a>
              <a href="sms:(720) 864-1333" className="flex items-center gap-2 hover:text-[var(--clay)]">
                <MessageCircle className="h-4 w-4 text-[var(--clay)]" />
                (720) 864-1333
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.4em] text-[var(--sage)]">Office hours</h4>
            <div className="space-y-3 text-sm text-[var(--soft-text)]">
              {hours.map((schedule) => (
                <div key={schedule.day} className="flex items-center justify-between border-b border-[var(--shell)] pb-2 last:border-none last:pb-0">
                  <span className="font-semibold text-[var(--pine)]">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-[0.4em] text-[var(--sage)]">Around the site</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[var(--pine)] hover:text-[var(--clay)]">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--shell)] p-2 text-[var(--pine)] transition hover:border-[var(--clay)] hover:text-[var(--clay)]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--shell)] p-2 text-[var(--pine)] transition hover:border-[var(--clay)] hover:text-[var(--clay)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--shell)] pt-6 text-xs text-[var(--soft-text)]">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p>© {currentYear} Cherry Creek South Dental. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[var(--clay)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--clay)]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
