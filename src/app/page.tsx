import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Heart,
  Shield,
  Sparkles,
  Phone,
  Leaf,
} from 'lucide-react';

export default function Home() {
  // Why Choose Us benefits
  const whyChooseUs = [
    {
      icon: Heart,
      text: 'Family-owned practice with a warm, welcoming atmosphere',
    },
    {
      icon: CheckCircle2,
      text: 'Longer cleaning appointments for deeper, more detailed preventive care',
    },
    {
      icon: Shield,
      text: "Conservative dentistry—you'll never be pushed into treatment",
    },
    {
      icon: Heart,
      text: 'Collaborative care: we build treatment plans with you',
    },
    {
      icon: Sparkles,
      text: 'Modern technology for precise, comfortable diagnostics',
    },
    {
      icon: Star,
      text: 'Trusted for general dentistry, cosmetic dentistry, facial aesthetics, and family care',
    },
  ];

  // Dr. Bright special interests
  const specialInterests = [
    'Preventive & general dentistry',
    'Cosmetic smile transformations',
    'Invisalign® clear aligners',
    'Dental implants & restorations',
    'Facial aesthetic treatments (including Botox)',
    'TMJ evaluation with CBCT imaging',
  ];

  // Services
  const services = [
    {
      number: '1',
      title: 'Dental Exams & Cleanings',
      description: 'Extended appointment times, deeper cleanings, and AI-enhanced diagnostics ensure better preventive care and long-term oral health.',
    },
    {
      number: '2',
      title: 'Cosmetic Dentistry',
      description: 'From whitening and veneers to full smile makeovers, we create natural, confidence-boosting results tailored to your goals.',
    },
    {
      number: '3',
      title: 'Invisalign® Clear Aligners',
      description: 'Straighten your teeth discreetly and comfortably using advanced digital scanning and personalized aligner planning.',
    },
    {
      number: '4',
      title: 'Sedation Dentistry',
      description: 'We offer gentle, anxiety-free care using professional sedation so you can comfortably receive comprehensive treatment in a single visit.',
    },
  ];

  // Testimonials (TrustIndex style)
  const testimonials = [
    {
      name: 'Sarah M.',
      initial: 'S',
      color: '#8cc63e',
      date: '2 weeks ago',
      quote: 'Dr. Bright and his team made me feel completely comfortable. The longer appointment times really make a difference.',
    },
    {
      name: 'Mike R.',
      initial: 'M',
      color: '#2d8a5e',
      date: '1 month ago',
      quote: 'Family-owned practice with modern technology. The AI x-rays are amazing and they explain everything clearly.',
    },
    {
      name: 'Jennifer L.',
      initial: 'J',
      color: '#1a2e44',
      date: '3 weeks ago',
      quote: "The calming atmosphere and patient-first approach is exactly what I needed. Highly recommend!",
    },
  ];

  // Column data for "Where Patient-First Care" section
  const columns = [
    {
      icon: '🌿',
      title: 'Office Environment',
      description: 'Our office features a calming atrium filled with natural light and plants, helping every visit feel more like a retreat than a clinical appointment.',
    },
    {
      icon: '🔬',
      title: 'State-of-the-Art Technology',
      description: 'We use state-of-the-art dental technology—including AI-integrated X-rays, CBCT imaging for TMJ and bone scans, and top-of-the-line digital scanners.',
    },
    {
      icon: '✨',
      title: 'Focus on Care Quality',
      description: 'Our technology ensures accuracy, comfort, and exceptional quality of care.',
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.avif"
            alt="Cherry Creek South Dental Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/95 via-[#1a2e44]/80 to-[#1a2e44]/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
              Denver&apos;s Home for Trusted, Comfortable, Family-Owned Dentistry
            </h1>
            <p className="text-xl mb-10 max-w-2xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Modern Care. Conservative Treatment. A Dental Experience Designed for You.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:scale-105"
                style={{ backgroundColor: '#8cc63e', color: '#ffffff' }}
              >
                <ArrowRight className="h-5 w-5" />
                Schedule Your Appointment
              </a>
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:bg-white/20"
                style={{ color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE PATIENT-FIRST CARE MEETS ADVANCED DENTISTRY */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8cc63e] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Where Patient-First Care Meets Advanced Dentistry
            </h2>
            <p className="text-lg text-[#4a4a5c] max-w-4xl mx-auto leading-relaxed">
              Cherry Creek South Dental is a family-owned dental practice in Denver, proudly offering a relaxed, unrushed, and truly personalized dental experience. Unlike corporate offices, we take the time to get to know you, understand your goals, and deliver dentistry that keeps you comfortable and confident.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {columns.map((column) => (
              <div
                key={column.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-[#8cc63e]/10 rotate-12 group-hover:rotate-6 transition-transform duration-300" />
                <span className="text-5xl mb-6 block relative">{column.icon}</span>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
                  {column.title}
                </h3>
                <p className="text-[#4a4a5c] leading-relaxed">
                  {column.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PATIENTS CHOOSE CHERRY CREEK SOUTH DENTAL */}
      <section className="py-24 bg-[#1a2e44]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/drbright-lobby.jpg"
                  alt="Cherry Creek South Dental welcoming office"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-[#8cc63e]/20 -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#8cc63e' }}>
                About the Practice
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8" style={{ color: '#ffffff' }}>
                Why Patients Choose Cherry Creek South Dental
              </h2>
              
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#8cc63e' }} />
                    <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <p className="italic" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <strong style={{ color: '#8cc63e' }}>Our mission:</strong> Cherry Creek South Dental offers personalized, family-oriented care with modern technology, focusing on conservative, collaborative treatments for all your dental needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET DR. BRIGHT */}
      <section className="py-24 bg-gradient-to-br from-[#fef9f3] to-[#fdf6ed]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content - 3 cols */}
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2d8a5e] mb-4">
                Meet Your Dentist
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
                Meet Dr. Bright — Your Trusted Denver Dentist
              </h2>
              <div className="space-y-4 text-[#4a4a5c] text-lg leading-relaxed mb-8">
                <p>
                  Dr. Bright is known for his gentle approach, meticulous attention to detail, and commitment to helping patients feel relaxed and informed. With extensive experience in both general and cosmetic dentistry, he blends advanced clinical skill with a friendly, patient-centered philosophy that sets the tone for the entire practice.
                </p>
                <p>
                  He believes that exceptional dentistry starts with trust. That&apos;s why he takes time to explain every option, answer every question, and help each patient participate in their oral health decisions. His goal is to provide the kind of dentistry he&apos;d want for his own family—thorough, conservative, and focused on long-term wellness.
                </p>
              </div>
              
              <div className="mb-8">
                <p className="font-semibold text-[#1a1a2e] mb-4">Special interests include:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {specialInterests.map((interest) => (
                    <div key={interest} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#2d8a5e] flex-shrink-0" />
                      <span className="text-[#4a4a5c]">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:opacity-90"
                style={{ backgroundColor: '#8cc63e', color: '#ffffff' }}
              >
                Schedule Your Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Image - 2 cols */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Digital Assets/Dr. Bright and family.png"
                  alt="Dr. Bright and family"
                  width={400}
                  height={500}
                  className="w-full h-[450px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-2xl bg-[#2d8a5e]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE DENTAL SERVICES */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8cc63e] mb-4">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight">
              Comprehensive Dental Services to Support Every Smile
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span 
                    className="text-4xl font-bold flex-shrink-0"
                    style={{ color: '#8cc63e' }}
                  >
                    {service.number}.
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#4a4a5c] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#2d8a5e] font-semibold hover:underline"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS - TrustIndex Style */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-4">
              What Patients Love About Cherry Creek South Dental
            </h2>
          </div>

          {/* Google Rating Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 inline-flex flex-col items-center border border-gray-100">
              {/* Google Logo */}
              <div className="flex items-center gap-2 mb-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xl font-semibold text-[#1a1a2e]">Google Reviews</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-bold text-[#1a1a2e]">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#4a4a5c]">Based on 50+ reviews</p>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Header with Avatar and Google Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a2e]">{testimonial.name}</p>
                      <p className="text-xs text-[#4a4a5c]">{testimonial.date}</p>
                    </div>
                  </div>
                  {/* Google G Icon */}
                  <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-[#4a4a5c] leading-relaxed text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-center text-lg text-[#4a4a5c] max-w-3xl mx-auto">
            Patients consistently praise our attentive care, relaxing environment, and Dr. Bright&apos;s gentle, transparent approach.
          </p>
        </div>
      </section>

      {/* READY TO TRANSFORM YOUR SMILE CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2e44 0%, #0a3d1f 50%, #052a16 100%)' }}>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Leaf className="h-12 w-12 mx-auto mb-6" style={{ color: '#8cc63e' }} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Whether you&apos;re looking for subtle refinements or a complete transformation, Cherry Creek South Dental is here to help you achieve a smile you love.
          </p>
          <a
            href="tel:(303) 377-7744"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition hover:scale-105"
            style={{ backgroundColor: '#8cc63e', color: '#ffffff' }}
          >
            Schedule Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* FIND US / MAP SECTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8cc63e] mb-4">
              Our Location
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Find Us in the Heart of Denver&apos;s Cherry Creek Area
            </h2>
            <p className="text-lg text-[#4a4a5c] max-w-3xl mx-auto">
              We&apos;re conveniently located near Glendale, Colorado Boulevard, and Cherry Creek&apos;s residential neighborhoods—making us an easy choice for families, professionals, and Denver-area residents seeking high-quality, patient-first dental care.
            </p>
              </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[450px] max-w-4xl mx-auto mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.1893625952412!2d-104.92827420073058!3d39.7005873435678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d089e7f05fb%3A0x53c315a85d1e3f98!2sCherry%20Creek%20South%20Dental!5e0!3m2!1sen!2sar!4v1764887572863!5m2!1sen!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cherry Creek South Dental Location"
            />
            </div>

          <div className="text-center">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:scale-105"
              style={{ backgroundColor: '#8cc63e', color: '#ffffff' }}
            >
              <ArrowRight className="h-5 w-5" />
              Schedule Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
