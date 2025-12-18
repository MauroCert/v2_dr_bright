import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hours = [
    { day: 'Mon', hours: '8:00 AM – 5:00 PM' },
    { day: 'Tue', hours: '8:00 AM – 4:00 PM' },
    { day: 'Wed', hours: '8:00 AM – 4:00 PM' },
    { day: 'Thu', hours: '7:00 AM – 1:00 PM' },
    { day: 'Fri–Sun', hours: 'Closed' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Info for Patients', href: '/patient-info' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-[#0f1c2e] overflow-hidden" style={{ color: '#ffffff' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8cc63e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d8a5e]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:[grid-template-columns:1.5fr_0.8fr_0.8fr_0.8fr]">
          {/* Map */}
          <div className="lg:col-span-1">
            <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-lg md:-mx-4 lg:-mx-6">
              <iframe
                title="Cherry Creek South Dental on Google Maps"
                src="https://maps.google.com/maps?q=Cherry%20Creek%20South%20Dental%2C%205055%20E%20Kentucky%20Ave%2C%20Denver%2C%20CO%2080246&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-72 md:h-80 max-w-none"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold" style={{ color: '#8cc63e' }}>Quick Links</h4>
            <nav className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block transition-colors hover:opacity-80"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold" style={{ color: '#8cc63e' }}>Contact</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:(303) 377-7744" 
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4" style={{ color: '#8cc63e' }} />
                </div>
                <span>Call: (303) 377-7744</span>
              </a>
              <a
                href="sms:(720) 864-1333" 
                className="flex items-center gap-3 transition-colors hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4" style={{ color: '#8cc63e' }} />
                </div>
                <span>Text: (720) 864-1333</span>
              </a>
              <div className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" style={{ color: '#8cc63e' }} />
                </div>
                <span>5055 E Kentucky Ave<br />Denver, CO 80246</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8cc63e] transition-colors"
                aria-label="Facebook"
                style={{ color: '#ffffff' }}
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8cc63e] transition-colors"
                aria-label="Instagram"
                style={{ color: '#ffffff' }}
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2" style={{ color: '#8cc63e' }}>
              <Clock className="h-4 w-4" />
              Office Hours
            </h4>
            <div className="space-y-1.5 text-sm">
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
              style={{ color: '#8cc63e' }}
            >
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.avif"
                alt="Cherry Creek South Dental"
                width={160}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                © {currentYear} Cherry Creek South Dental, PLLC. All rights reserved.
              </p>
            </div>
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
              style={{ color: '#8cc63e' }}
            >
              Dental Marketing from Day One
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
