import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 1:00 PM' },
    { day: 'Fri - Sun', hours: 'Closed' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Patient Info', href: '/patient-info' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-[#0f1c2e] overflow-hidden" style={{ color: '#ffffff' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--coral)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--green)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.avif"
              alt="Cherry Creek South Dental"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Family-owned dentistry with longer appointments, modern technology, and a calming atmosphere.
            </p>
            <div className="flex gap-3">
              <a
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8734a] transition-colors"
                aria-label="Facebook"
                style={{ color: '#ffffff' }}
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8734a] transition-colors"
                aria-label="Instagram"
                style={{ color: '#ffffff' }}
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: '#f08565' }}>Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block transition-colors text-sm hover:opacity-80"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: '#f08565' }}>Contact</h4>
            <div className="space-y-4 text-sm">
              <a 
                href="tel:(303) 377-7744" 
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4" style={{ color: '#f08565' }} />
                </div>
                <span>(303) 377-7744</span>
              </a>
              <a
                href="sms:(720) 864-1333" 
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4" style={{ color: '#f08565' }} />
                </div>
                <span>(720) 864-1333</span>
              </a>
              <div className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" style={{ color: '#f08565' }} />
                </div>
                <span>5055 E Kentucky Ave<br />Denver, CO 80246</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2" style={{ color: '#f08565' }}>
              <Clock className="h-4 w-4" />
              Office Hours
            </h4>
            <div className="space-y-2 text-sm">
              {hours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <span>{schedule.day}</span>
                  <span style={{ color: schedule.hours === 'Closed' ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.85)' }}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://maps.app.goo.gl/Ye2gTCTUwE17Wm8G8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: '#f08565' }}
            >
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
              © {currentYear} Cherry Creek South Dental, PLLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <Link href="/privacy-policy" className="transition-colors hover:opacity-80">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:opacity-80">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-center mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Powered by{' '}
            <a
              href="https://dentalmarketingfromdayone.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-80"
              style={{ color: '#f08565' }}
            >
              Dental Marketing from Day One
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
