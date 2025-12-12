import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  Shield, 
  Smile, 
  Zap, 
  Clock,
  Phone,
  Users,
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'General & Family Dentistry',
    subtitle: 'Preventive Care',
    description: '60–90 minute preventive visits with AI x-rays, oral cancer screenings, and personalized care for the whole family.',
    href: '/services/general-dentistry',
    icon: Users,
    color: '#2d8a5e',
    features: ['Longer hygiene visits', 'Oral cancer screenings', 'Family-friendly care'],
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Cosmetic Dentistry',
    subtitle: 'Smile Design',
    description: 'Custom veneers, bonding, whitening, and facial aesthetics planned with digital previews and collaborative design.',
    href: '/services/cosmetic-dentistry',
    icon: Sparkles,
    color: '#8cc63e',
    features: ['Porcelain veneers', 'Professional whitening', 'Smile makeovers'],
    image: '/images/drbright-lobby.jpg',
  },
  {
    title: 'Invisalign® & Orthodontics',
    subtitle: 'Clear Aligners',
    description: 'Discreet aligner plans with digital scanners, remote-friendly check-ins, and retention coaching from Dr. Bright.',
    href: '/services#invisalign',
    icon: Smile,
    color: '#1a2e44',
    features: ['Digital impressions', 'Remote monitoring', 'Retention planning'],
    image: '/images/drbright-invisalign.png',
    imageType: 'logo',
  },
  {
    title: 'Restorative Dentistry',
    subtitle: 'Implants & Crowns',
    description: 'Conservative restorative plans including implants, crowns, bridges, and bone preservation guided by CBCT scans.',
    href: '/services#restorative',
    icon: Shield,
    color: '#2d8a5e',
    features: ['Dental implants', 'Crowns & bridges', 'Full-mouth rehab'],
    image: '/images/drbright-covid-badge.png',
    imageType: 'logo',
  },
  {
    title: 'Emergency Dentistry',
    subtitle: 'Same-Day Care',
    description: 'Same-day relief for tooth pain, chipped teeth, or infections with calm bedside manner and dedicated time.',
    href: '/services#emergency',
    icon: Zap,
    color: '#8cc63e',
    features: ['Same-day appointments', 'Pain relief', 'After-hours support'],
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Sedation & Comfort',
    subtitle: 'Anxiety-Free Care',
    description: 'Laughing gas, comfort amenities, and unrushed pacing for anxious patients or longer procedures.',
    href: '/services#sedation',
    icon: Heart,
    color: '#1a2e44',
    features: ['Nitrous oxide', 'Weighted blankets', 'Extended appointments'],
    image: '/images/drbright-lobby.jpg',
  },
];

const faqs = [
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we work with most major PPO plans. Our team will verify your benefits and provide cost estimates before treatment.',
  },
  {
    question: 'What ages do you treat?',
    answer: 'We welcome families, adults, young professionals, and seniors. Our longer appointments help every age feel comfortable and cared for.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'AI-powered x-rays, CBCT imaging, intraoral scanners, Invisalign® software, and digital photography guide every treatment plan.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'Call us at (303) 377-7744, text us at (720) 864-1333, or use our online scheduling. We\'ll send forms and confirm your visit.',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/drbright-lobby.jpg"
            alt="Cherry Creek South Dental Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/95 via-[#1a2e44]/80 to-[#1a2e44]/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
              Comprehensive dental services with concierge-level warmth.
            </h1>
            <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Our Cherry Creek South Dental approach blends preventive focus, honest education, a joyful atmosphere, and concierge-level time.
            </p>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:scale-105"
              style={{ backgroundColor: '#8cc63e', color: '#ffffff' }}
            >
              <ArrowRight className="h-5 w-5" />
              Schedule Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8cc63e] mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Services Tailored to Your Needs
            </h2>
            <p className="mt-4 text-[#4a4a5c] max-w-2xl mx-auto">
              Every treatment is guided by longer appointments, honest education, and advanced technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={
                      service.imageType === 'logo'
                        ? 'object-contain bg-gradient-to-br from-gray-50 to-white p-8'
                        : 'object-cover group-hover:scale-105 transition-transform duration-500'
                    }
                  />
                  <div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: service.color }}>
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#2d8a5e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#4a4a5c] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#4a4a5c]">
                        <CheckCircle2 className="h-4 w-4 text-[#2d8a5e] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-[#8cc63e] font-semibold text-sm">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Quick Bar */}
      <section className="py-6 bg-[#1a2e44]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: 'Longer Appointments', icon: Clock },
              { label: 'Advanced Technology', icon: Zap },
              { label: 'Family-Owned', icon: Heart },
              { label: 'Patient-First Care', icon: Users },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3" style={{ color: '#ffffff' }}>
                <item.icon className="h-5 w-5" style={{ color: '#8cc63e' }} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8cc63e] mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Questions About Our Services?
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details 
                key={faq.question} 
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-[#1a1a2e] hover:text-[#2d8a5e] transition-colors">
                  {faq.question}
                  <ArrowRight className="h-5 w-5 text-[#4a4a5c] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[#4a4a5c] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a2e44]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Experience Better Dentistry?
          </h2>
          <p className="text-xl mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Schedule a visit and discover the difference longer appointments, modern technology, and genuine care can make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:scale-105"
              style={{ backgroundColor: '#8cc63e', color: '#ffffff' }}
            >
              <Phone className="h-5 w-5" />
              Call (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:bg-white/20"
              style={{ color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
