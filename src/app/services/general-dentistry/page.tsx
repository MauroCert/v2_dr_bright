import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Shield, 
  Sparkles,
  Phone,
  Stethoscope,
  Scan,
  Smile,
} from 'lucide-react';

const serviceFeatures = [
  {
    number: '01',
    title: 'Longer Hygiene Visits',
    description: '60–90 minute cleanings allow ultrasonic + hand scaling, perio charting, and time for all your questions.',
    icon: Clock,
    benefits: ['Ultrasonic + hand scaling', 'Periodontal charting', 'Personalized coaching'],
  },
  {
    number: '02',
    title: 'Comprehensive Screenings',
    description: 'Every visit includes oral cancer screenings, TMJ checks, and airway reviews for full-body wellness.',
    icon: Stethoscope,
    benefits: ['Oral cancer screening', 'TMJ evaluation', 'Airway assessment'],
  },
  {
    number: '03',
    title: 'AI Diagnostics & CBCT',
    description: 'We blend AI x-rays and CBCT scans to catch changes early and explain them clearly.',
    icon: Scan,
    benefits: ['AI-assisted x-rays', 'CBCT imaging', 'Digital documentation'],
  },
  {
    number: '04',
    title: 'Comfort-First Approach',
    description: 'Atrium vibes, laughing gas, blankets, and playlists keep every cleaning relaxed and judgement-free.',
    icon: Heart,
    benefits: ['Nitrous oxide available', 'Weighted blankets', 'Calming environment'],
  },
];

const visitSteps = [
  {
    step: '1',
    title: 'Welcome & Goals',
    description: 'Settle into our calming atrium lounge, enjoy a beverage, and share your priorities with our team.',
  },
  {
    step: '2',
    title: 'Diagnostics & Cleaning',
    description: 'AI-assisted x-rays, CBCT imaging when needed, photography, and thorough hygiene care.',
  },
  {
    step: '3',
    title: 'Co-Planning Session',
    description: 'Dr. Bright reviews everything chairside, answering all your questions as you go.',
  },
  {
    step: '4',
    title: 'Comfort & Follow-Up',
    description: 'Comfort amenities during treatment and text check-ins to keep you supported after your visit.',
  },
];

const relatedServices = [
  { name: 'Periodontal therapy & maintenance', href: '/services#periodontal' },
  { name: 'Fluoride treatments & sealants', href: '/services#preventive' },
  { name: 'Nightguards & bite guards', href: '/services#guards' },
  { name: 'Whitening touch-ups', href: '/services#whitening' },
  { name: 'Membership plan savings', href: '/membership' },
];

const faqs = [
  {
    question: 'How often should I come in for cleanings?',
    answer: 'Most preventive patients visit every six months, but we personalize intervals based on gum health, lifestyle, and your specific goals.',
  },
  {
    question: 'Do longer appointments cost more?',
    answer: 'No. We simply schedule fewer patients per day so you receive more time, clarity, and hospitality at each visit without additional fees.',
  },
  {
    question: 'What if I have dental anxiety?',
    answer: 'Text us before your visit and we\'ll note your preferences. Nitrous oxide, blankets, a calm atrium atmosphere, and gentle pacing are always available.',
  },
  {
    question: 'Do you see children?',
    answer: 'Yes! We welcome families and create a comfortable, educational experience for patients of all ages.',
  },
];

export default function GeneralDentistry() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/drbright-patient.jpg"
            alt="General Dentistry at Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/95 via-[#1a2e44]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span style={{ color: '#f08565' }}>General Dentistry</span>
            </nav>
            
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#f08565' }}>
              Preventive Care
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
              General & Family Dentistry
          </h1>
            <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Preventive visits designed for calm, clarity, and connection. Longer cleanings, AI diagnostics, and collaborative planning ensure every visit feels educational and uplifting.
            </p>
            <div className="flex flex-wrap gap-4">
            <a
              href="tel:(303) 377-7744"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:scale-105"
                style={{ backgroundColor: '#e8734a', color: '#ffffff' }}
              >
                <Phone className="h-5 w-5" />
                Schedule a Cleaning
              </a>
              <a
                href="sms:(720) 864-1333"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:bg-white/20"
                style={{ color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
              >
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT - Numbered Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2d8a5e] mb-4">
              The Cherry Creek South Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Why Our Preventive Care Stands Out
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature) => (
              <div 
                key={feature.number}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div>
                    <span className="text-4xl font-bold" style={{ color: '#e8734a' }}>
                      {feature.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#2d8a5e' }}
                      >
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1a1a2e]">{feature.title}</h3>
                    </div>
                    <p className="text-[#4a4a5c] leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-[#4a4a5c]">
                          <CheckCircle2 className="h-4 w-4 text-[#2d8a5e] flex-shrink-0" />
                          {benefit}
                    </li>
                  ))}
                </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR VISIT - Timeline Style */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/drbright-lobby.jpg"
                  alt="Cherry Creek South Dental calming atrium"
                  width={600}
                  height={500}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block">
                <Smile className="h-8 w-8 mb-3" style={{ color: '#2d8a5e' }} />
                <p className="text-[#1a1a2e] font-semibold mb-1">Calming Atmosphere</p>
                <p className="text-sm text-[#4a4a5c]">Natural light, plants, and music curated for relaxation.</p>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-[#e8734a]/10 -z-10" />
            </div>

            {/* Steps */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
                What to Expect
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-8">
                Your First Visit Experience
              </h2>
              
              <div className="space-y-6">
                {visitSteps.map((step, index) => (
                  <div key={step.step} className="flex gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                      style={{ backgroundColor: '#1a2e44', color: '#ffffff' }}
                    >
                      {step.step}
                    </div>
                    <div className={index !== visitSteps.length - 1 ? 'pb-6 border-l-2 border-gray-200 pl-6 -ml-5' : 'pl-6 -ml-5'}>
                      <h3 className="text-lg font-semibold text-[#1a1a2e] mb-1">{step.title}</h3>
                      <p className="text-[#4a4a5c]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES + FAQ */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Related Services */}
          <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2d8a5e] mb-4">
                Related Treatments
              </p>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
                Services That Support Preventive Care
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {relatedServices.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#2d8a5e]" />
                          <span className="text-[#4a4a5c] group-hover:text-[#1a1a2e] transition-colors">
                            {service.name}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[#4a4a5c] group-hover:text-[#e8734a] group-hover:translate-x-1 transition-all" />
                      </Link>
                </li>
              ))}
            </ul>
          </div>

              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#1a2e44' }}>
                <Shield className="h-8 w-8 mb-4" style={{ color: '#f08565' }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#ffffff' }}>
                  No Insurance? No Problem.
                </h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Our membership plan offers preventive care savings for uninsured families.
                </p>
                <Link 
                  href="/membership"
                  className="inline-flex items-center text-sm font-semibold hover:underline"
                  style={{ color: '#f08565' }}
                >
                  View Membership Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* FAQs */}
          <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
                FAQs
              </p>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
                Common Questions
              </h2>
              <div className="space-y-4">
              {faqs.map((faq) => (
                  <details 
                    key={faq.question}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-[#1a1a2e] hover:text-[#2d8a5e] transition-colors">
                      {faq.question}
                      <ArrowRight className="h-4 w-4 text-[#4a4a5c] group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-[#4a4a5c] leading-relaxed">{faq.answer}</p>
                    </div>
                </details>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a2e44]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6" style={{ color: '#f08565' }} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready for Preventive Care That Never Feels Rushed?
          </h2>
          <p className="text-xl mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Text or call to reserve your longer visit. We'll send forms, review insurance, and ensure your experience matches the calm energy of our office.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:scale-105"
              style={{ backgroundColor: '#e8734a', color: '#ffffff' }}
            >
              <Phone className="h-5 w-5" />
              Call (303) 377-7744
            </a>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:bg-white/20"
              style={{ color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              View Membership Plans
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
