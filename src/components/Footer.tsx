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
    <footer className="mt-24 bg-[var(--pine)] text-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.9fr,0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--shell)]/90">Cherry Creek South Dental</p>
            <h3 className="text-3xl font-semibold leading-snug">Family-owned dentistry with concierge-level time.</h3>
            <p className="text-[var(--shell)]">
              Longer hygiene visits, advanced technology, and a plant-filled atrium keep appointments calm for every age.
            </p>
            <div className="space-y-4 text-sm">
              <a
                href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[var(--surface)]/90 hover:text-white"
              >
                <MapPin className="mt-1 h-5 w-5 text-[var(--clay)]" />
                5055 E Kentucky Ave, Denver, CO 80246
              </a>
              <a href="tel:(303) 377-7744" className="flex items-center gap-3 text-[var(--surface)]/90 hover:text-white">
                <Phone className="h-5 w-5 text-[var(--clay)]" />
                    (303) 377-7744
                  </a>
              <a href="sms:(720) 864-1333" className="flex items-center gap-3 text-[var(--surface)]/90 hover:text-white">
                <MessageCircle className="h-5 w-5 text-[var(--clay)]" />
                    (720) 864-1333
                  </a>
              </div>
            </div>

            <div>
            <h4 className="text-lg font-semibold text-[var(--shell)]">Office Hours</h4>
            <div className="mt-4 space-y-3 text-sm">
                {hours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between border-b border-white/10 pb-2 last:border-b-0"
                >
                  <span className="font-semibold text-white">{schedule.day}</span>
                  <span className="text-[var(--shell)]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--shell)]/80">Emergency Care</p>
              <p className="mt-3 text-sm text-[var(--shell)]">Call us for after-hours emergencies to connect with a team member.</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--shell)]">Quick Links</h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[var(--shell)] transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--shell)]/80">Visit us</p>
              <p className="mt-3 text-sm">Atrium suites near Cherry Creek Trail with free parking on site.</p>
            <a
              href="https://maps.app.goo.gl/Ye2gTCTUwE17Wm8G8"
              target="_blank"
              rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--clay)] hover:text-white"
            >
                View map →
            </a>
          </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 text-white transition hover:border-white hover:text-[var(--clay)]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 text-white transition hover:border-white hover:text-[var(--clay)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--shell)]">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[var(--shell)]">
            © {currentYear} Cherry Creek South Dental. Built for Cherry Creek families with love and calm energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
