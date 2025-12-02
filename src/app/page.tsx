import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Heart,
  Shield,
  Sparkles,
  Users,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Calendar,
  FileText,
  MessageSquare,
} from 'lucide-react';

export default function Home() {
  // Service options - "I'm looking for..." style
  const serviceOptions = [
    {
      title: "I'm looking for a new dentist",
      subtitle: 'Family & General Dentistry',
      description: 'Longer appointments, personalized care, and a calming atmosphere for the whole family.',
      icon: Users,
      href: '/services#general',
      color: 'coral',
    },
    {
      title: 'I want to improve my smile',
      subtitle: 'Cosmetic Dentistry',
      description: 'Veneers, whitening, Invisalign®, and facial aesthetics to enhance your confidence.',
      icon: Sparkles,
      href: '/services#cosmetic',
      color: 'green',
    },
    {
      title: 'I need tooth replacement',
      subtitle: 'Restorative Dentistry',
      description: 'Implants, crowns, bridges, and full-mouth rehabilitation with modern technology.',
      icon: Shield,
    href: '/services#restorative',
      color: 'navy',
    },
  ];

  // Quick links
  const quickLinks = [
    { name: 'Meet Dr. Bright', href: '/about/dr-bright', icon: Users },
    { name: 'Patient Forms', href: '/patient-info/forms', icon: FileText },
    { name: 'Location & Hours', href: '/contact', icon: Clock },
    { name: 'Patient Stories', href: '/testimonials', icon: MessageSquare },
  ];

  // Why choose us - numbered values
  const whyChooseUs = [
    {
      number: '01',
      title: 'Family-Owned Practice',
      description: 'Unlike corporate dental chains, we treat every patient like family with personalized attention and genuine care.',
    },
    {
      number: '02',
      title: 'Patient-First Philosophy',
      description: 'We present all treatment options and make decisions together. Your comfort and understanding come first.',
    },
    {
      number: '03',
      title: 'Longer Appointments',
      description: 'No rushing. Our extended hygiene visits allow thorough care and time to address all your questions.',
    },
    {
      number: '04',
      title: 'Advanced Technology',
      description: 'AI-assisted x-rays, CBCT imaging, digital scanners, and same-day solutions for better outcomes.',
    },
    {
      number: '05',
      title: 'Calming Atmosphere',
      description: 'Our beautiful atrium with natural plants creates a relaxing environment that eases dental anxiety.',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'Dr. Bright and his team made me feel completely comfortable. The longer appointment times really make a difference.',
    },
    {
      name: 'Mike R.',
      quote: 'Family-owned practice with modern technology. The AI x-rays are amazing and they explain everything clearly.',
    },
    {
      name: 'Jennifer L.',
      quote: 'The calming atmosphere and patient-first approach is exactly what I needed. Highly recommend!',
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO - Full width with tagline */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.avif"
            alt="Cherry Creek South Dental Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/90 via-[#1a2e44]/70 to-transparent" />
        </div>
        
        {/* Content - Left aligned */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <Image
              src="/images/drbright-logo.png"
              alt="Cherry Creek South Dental"
              width={160}
              height={160}
              className="h-20 w-auto mb-8 drop-shadow-xl"
              priority
            />
            <p className="text-lg uppercase tracking-[0.2em] mb-4" style={{ color: '#f08565' }}>
              Cherry Creek South Dental
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6" style={{ color: '#ffffff' }}>
              Care you can trust.<br />
              <span className="font-semibold">Experience you deserve.</span>
            </h1>
            <p className="text-xl mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Family-owned dentistry in Denver with longer appointments, modern technology, and a calming atmosphere.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:scale-105"
                style={{ backgroundColor: '#e8734a', color: '#ffffff' }}
              >
                <Calendar className="h-5 w-5" />
                Schedule an Appointment
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:bg-white/20"
                style={{ color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
              >
                Learn About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OPTIONS - "I'm looking for..." cards */}
      <section className="py-20 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {serviceOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: option.color === 'coral' ? '#e8734a' : 
                                     option.color === 'green' ? '#2d8a5e' : '#1a2e44'
                  }}
                >
                  <option.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#2d8a5e] transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm font-medium text-[#e8734a] uppercase tracking-wide mb-3">
                  {option.subtitle}
                </p>
                <p className="text-[#4a4a5c] leading-relaxed">
                  {option.description}
                </p>
                <div className="mt-6 flex items-center text-[#2d8a5e] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS BAR */}
      <section className="py-4 bg-[#1a2e44]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors hover:bg-white/10"
                style={{ color: '#ffffff' }}
              >
                <link.icon className="h-5 w-5" style={{ color: '#f08565' }} />
                <span className="font-medium">{link.name}</span>
              </Link>
              ))}
            </div>
          </div>
      </section>

      {/* WELCOME / ABOUT SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/drbright-lobby.jpg"
                  alt="Dr. Bright's welcoming dental office"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-[#e8734a]/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-[#2d8a5e]/10 -z-10" />
            </div>

            {/* Content Side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
                Welcome to Cherry Creek South Dental
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
                Comprehensive Care You Can Trust in Denver
              </h2>
              <div className="space-y-4 text-[#4a4a5c] text-lg leading-relaxed">
                <p>
                  With a focus on patient comfort and conservative care, Cherry Creek South Dental is more than a dentist's office. It's a home for devoted, dedicated care where your desires and comfort come first.
                </p>
                <p>
                  Dr. Bright and his team offer longer appointment times, thorough explanations, and treatment plans made together with you—not for you. We believe everyone deserves an unmatched level of gentle care based on exceptional quality and compassion.
                </p>
                <p>
                  From routine cleanings and Invisalign® to dental implants and facial aesthetics, we're equipped to handle all your dental healthcare needs while ensuring you feel comfortable and at ease.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: '#2d8a5e', color: '#ffffff' }}
                >
                  About Our Practice
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about/dr-bright"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:bg-[#1a2e44] hover:text-white"
                  style={{ border: '2px solid #1a2e44', color: '#1a2e44' }}
                >
                  Meet Dr. Bright
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Numbered list */}
      <section className="py-24 bg-[#1a2e44]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#f08565' }}>
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: '#ffffff' }}>
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.number}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 2 ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <span 
                  className="text-5xl font-bold mb-4 block"
                  style={{ color: '#e8734a' }}
                >
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#ffffff' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)' }} className="leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET DR. BRIGHT - Simple banner */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content - 3 cols */}
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2d8a5e] mb-4">
                Meet Your Dentist
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
                Dr. Bright
              </h2>
              <p className="text-[#4a4a5c] text-lg leading-relaxed mb-6">
                Dr. Bright combines advanced technology with a collaborative mindset. He cares for families who value detailed explanations, patient-first philosophies, and a relaxing environment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Member of leading continuing-education study clubs',
                  'Conservative treatment planning done with patients',
                  'Facial aesthetics, Botox, Invisalign®, and full-mouth rehabilitation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#2d8a5e] mt-0.5 flex-shrink-0" />
                    <span className="text-[#4a4a5c]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about/dr-bright"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:opacity-90"
                style={{ backgroundColor: '#2d8a5e', color: '#ffffff' }}
              >
                Learn More About Dr. Bright
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Image - 2 cols */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/drbright.jpg"
                  alt="Dr. Bright"
                  width={400}
                  height={500}
                  className="w-full h-[450px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-2xl bg-[#e8734a]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Simple cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
              Patient Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight">
              Trusted by Denver Families
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <figure 
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 text-[#e8734a] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-[#4a4a5c] text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="font-semibold text-[#1a1a2e]">
                  {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[#2d8a5e] font-semibold hover:underline"
            >
              Read More Patient Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT / MAP SECTION */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.0!2d-104.93!3d39.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQxJzI0LjAiTiAxMDTCsDU1JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cherry Creek South Dental Location"
              />
            </div>

            {/* Contact Info + Form */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">
                Visit Us Today
              </h2>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <MapPin className="h-6 w-6 text-[#2d8a5e] mb-3" />
                  <h4 className="font-semibold text-[#1a1a2e] mb-1">Address</h4>
                  <p className="text-[#4a4a5c] text-sm">5055 E Kentucky Ave<br />Denver, CO 80246</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Clock className="h-6 w-6 text-[#2d8a5e] mb-3" />
                  <h4 className="font-semibold text-[#1a1a2e] mb-1">Hours</h4>
                  <p className="text-[#4a4a5c] text-sm">Mon 8-5 • Tue-Wed 8-4<br />Thu 7-1 • Fri-Sun Closed</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Phone className="h-6 w-6 text-[#2d8a5e] mb-3" />
                  <h4 className="font-semibold text-[#1a1a2e] mb-1">Call</h4>
                  <a href="tel:(303) 377-7744" className="text-[#e8734a] font-medium hover:underline">(303) 377-7744</a>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <MessageCircle className="h-6 w-6 text-[#2d8a5e] mb-3" />
                  <h4 className="font-semibold text-[#1a1a2e] mb-1">Text</h4>
                  <a href="sms:(720) 864-1333" className="text-[#e8734a] font-medium hover:underline">(720) 864-1333</a>
            </div>
          </div>

              {/* Simple CTA */}
              <div className="bg-[#1a2e44] rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#ffffff' }}>
                  Ready to schedule?
                </h3>
                <p className="mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Call or text us to book your appointment today.
                </p>
                <a
                  href="tel:(303) 377-7744"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: '#e8734a', color: '#ffffff' }}
                >
                  <Phone className="h-5 w-5" />
                  Call (303) 377-7744
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
