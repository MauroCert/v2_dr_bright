import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Star, Heart, Shield, Clock, Smile } from 'lucide-react';

const cosmeticServices = [
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile safely and effectively with professional-grade whitening solutions. Our whitening treatments are designed to remove deep stains caused by coffee, tea, wine, aging, and everyday life—without causing sensitivity or damaging enamel.',
    listTitle: 'Perfect for:',
    points: ['Special events', 'Photo-ready smiles', 'Reversing long-term discoloration', 'A fast, dramatic confidence boost'],
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Porcelain Veneers',
    description: 'Veneers are thin, custom-made porcelain shells that instantly refine your smile. They can change tooth shape, size, color, and alignment with stunning, natural results.',
    listTitle: 'Veneers can correct:',
    points: ['Chips', 'Gaps', 'Discoloration', 'Uneven or worn teeth', 'Minor misalignment', 'Irregular shapes'],
    note: 'Dr. Bright takes a meticulous approach to veneer design to ensure your results look beautifully natural—not artificial.',
    image: '/images/drbright-lobby.jpg',
  },
  {
    title: 'Invisalign® Clear Aligners',
    description: 'Straighten your teeth discreetly with Invisalign. Using digital scanning technology, we create a custom treatment plan that gradually moves your teeth into better alignment—without metal brackets or wires.',
    listTitle: 'Great for improving:',
    points: ['Crowding', 'Spacing', 'Bite alignment', 'Overlapping teeth', 'Aesthetic harmony'],
    image: '/images/drbright-invisalign.png',
    imageType: 'logo',
  },
  {
    title: 'Cosmetic Bonding',
    description: 'Cosmetic bonding uses tooth-colored composite material to repair chips, cracks, and small gaps. It\'s a fast, conservative, and cost-effective way to enhance your smile in a single appointment.',
    listTitle: 'Bonding is ideal for:',
    points: ['Minor aesthetic flaws', 'Fast fixes', 'Patients seeking a more affordable cosmetic option'],
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Smile Makeovers',
    description: 'For patients looking for a dramatic transformation, we combine custom treatments—such as whitening, veneers, and Invisalign—to design a complete smile makeover.',
    listTitle: 'Each smile makeover includes:',
    points: ['A comprehensive evaluation', 'Digital planning and imaging', 'Personalized treatment sequencing', 'Aesthetic design based on facial features, symmetry, and your goals'],
    image: '/images/drbright-lobby.jpg',
  },
];

const consultationProcess = [
  {
    title: 'Personalized Discussion',
    description: 'We start by understanding your goals, concerns, and ideal outcomes. Dr. Bright takes time to learn what you love and what you want to change about your smile.',
  },
  {
    title: 'Comprehensive Evaluation',
    description: 'We use advanced technology, including AI-enhanced X-rays and digital scans, to evaluate teeth, gums, and bite structure.',
  },
  {
    title: 'Customized Recommendations',
    description: 'Dr. Bright presents conservative, personalized options—and explains the benefits, timelines, and costs so you can make informed decisions.',
  },
  {
    title: 'Your Treatment Plan',
    description: 'Together, we create a treatment plan that fits your lifestyle, budget, and smile goals.',
  },
];

const whyChooseUs = [
  { icon: Star, text: 'Natural, high-quality aesthetic results' },
  { icon: Heart, text: 'Customized treatment plans based on your goals, timeline, and budget' },
  { icon: Sparkles, text: 'State-of-the-art technology for precision and comfort' },
  { icon: Shield, text: 'Conservative approach—no unnecessary work, ever' },
  { icon: CheckCircle2, text: "Collaborative planning so you're in control every step of the way" },
  { icon: Clock, text: 'Relaxed, welcoming environment with longer appointments and personal attention' },
];

const otherTreatments = [
  {
    title: 'Dental Implants',
    description: 'A long-lasting, natural-looking solution for missing teeth. Dental implants replace the tooth root and support a custom crown to restore function, stability, and confidence in your smile.',
    icon: Sparkles,
    href: '/services/restorative-dentistry',
  },
  {
    title: 'Dental Crowns & Restorations',
    description: 'Crowns protect and strengthen damaged or weakened teeth. They restore full function while blending seamlessly with your natural smile using durable, tooth-colored materials.',
    icon: Shield,
    href: '/services/restorative-dentistry',
  },
  {
    title: 'Invisalign® Clear Aligners',
    description: 'A discreet orthodontic treatment that straightens teeth using clear, removable trays. Ideal for correcting crowding, spacing, and bite issues without metal brackets.',
    icon: Smile,
    href: '/services/invisalign',
  },
  {
    title: 'Botox for Aesthetics & TMJ Relief',
    description: 'Botox can smooth fine lines around the mouth and reduce jaw tension caused by clenching or TMJ disorders. A minimally invasive option that enhances both comfort and facial aesthetics.',
    icon: Star,
    href: '/services',
  },
  {
    title: 'Professional Dental Cleanings',
    description: 'Regular cleanings are essential for a healthy foundation before cosmetic work. Our longer appointments ensure thorough plaque removal, gum health evaluation, and preventive care.',
    icon: Heart,
    href: '/services/general-dentistry',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening brightens your smile safely and effectively, lifting deep stains and discoloration for a noticeably whiter, more radiant smile.',
    icon: Sparkles,
    href: '/services/cosmetic-dentistry',
  },
];

const faqs = [
  {
    question: 'Does cosmetic dentistry hurt?',
    answer: 'Most cosmetic treatments are painless. Options like whitening, bonding, and Invisalign are minimally invasive. Veneer treatment is gentle and designed for long-term comfort.',
  },
  {
    question: 'How long do cosmetic results last?',
    answer: 'With proper care: Whitening lasts 1–3 years, Bonding 3–7 years, Veneers 10–15+ years, and Invisalign results are lifelong with retainers.',
    hasList: true,
  },
  {
    question: 'Is cosmetic dentistry covered by insurance?',
    answer: 'Most cosmetic treatments are considered elective. However, some procedures—like crowns or certain aligner treatments—may qualify for partial coverage depending on your provider.',
  },
  {
    question: 'Am I a candidate for cosmetic dentistry?',
    answer: "If you are in good oral health and want to enhance your smile, you are likely a great candidate. We'll assess at your consultation.",
  },
];

export default function CosmeticDentistry() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/drbright-patient.jpg"
            alt="Cosmetic Dentistry at Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/95 via-[#1a2e44]/80 to-[#1a2e44]/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#f08565' }}>
              Cosmetic Dentistry in Denver, CO
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: '#ffffff' }}>
              Transform Your Smile With Natural, Beautiful Results
            </h1>
            <p className="text-xl mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              At Cherry Creek South Dental, we believe cosmetic dentistry should enhance your smile in a way that looks natural, healthy, and uniquely you. Whether you&apos;re looking to brighten your teeth, refine your smile, or completely transform it, Dr. Bright combines advanced technology with a conservative, artistic approach to create results you&apos;ll love.
            </p>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition hover:scale-105"
              style={{ backgroundColor: '#e8734a', color: '#ffffff' }}
            >
              <ArrowRight className="h-5 w-5" />
              Schedule Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE COSMETIC DENTISTRY */}
      <section className="py-24 bg-[#1a2e44]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/drbright-patient.jpg"
                  alt="Cosmetic dentistry consultation with Dr. Bright"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-[#e8734a]/20 -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#f08565' }}>
                Why Choose Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8" style={{ color: '#ffffff' }}>
                Why Choose Cosmetic Dentistry With Dr. Bright?
              </h2>
              
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#f08565' }} />
                    <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg italic border-l-4 pl-4" style={{ color: 'rgba(255,255,255,0.85)', borderColor: '#f08565' }}>
                Your smile is one of the first things people notice. We&apos;re here to make sure it&apos;s a smile that reflects confidence, health, and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COSMETIC SERVICES - Alternating Layout */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
              Our Cosmetic Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Our Cosmetic Dentistry Services
            </h2>
          </div>
          
          <div className="space-y-24">
            {cosmeticServices.map((service, index) => (
              <div 
                key={service.title} 
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className={`w-full h-[400px] ${service.imageType === 'logo' ? 'object-contain bg-white p-12' : 'object-cover'}`}
                  />
                  {service.imageType !== 'logo' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e44]/40 via-transparent to-transparent" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#e8734a' }}>
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">{service.title}</h3>
                  </div>
                  <p className="text-lg text-[#4a4a5c] leading-relaxed">{service.description}</p>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-[#1a1a2e] mb-3">{service.listTitle}</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-[#4a4a5c]">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2d8a5e] flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.note && (
                    <p className="text-[#4a4a5c] italic border-l-4 border-[#e8734a] pl-4 mt-4">
                      {service.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION PROCESS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/drbright-lobby.jpg"
                alt="Modern cosmetic dentistry at Cherry Creek South Dental"
                width={600}
                height={450}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e44]/85 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-2 text-white">
                <p className="text-sm uppercase tracking-widest" style={{ color: '#f08565' }}>Your Smile Journey</p>
                <p className="text-2xl font-bold">Where artistry meets precision</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2d8a5e]">
                The Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
                What to Expect During Your Cosmetic Consultation
              </h2>
              <div className="space-y-4">
                {consultationProcess.map((step, index) => (
                  <div key={step.title} className="bg-[#fafafa] rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span 
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white font-bold"
                        style={{ backgroundColor: '#e8734a' }}
                      >
                        {index + 1}
                      </span>
                      <p className="font-semibold text-[#1a1a2e]">{step.title}</p>
                    </div>
                    <p className="mt-2 pl-13 text-[#4a4a5c]" style={{ paddingLeft: '52px' }}>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#e8734a] mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl shadow-sm border border-gray-100">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[#1a1a2e] text-lg">
                  {faq.question}
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full text-[#e8734a] transition group-open:rotate-45" style={{ backgroundColor: 'rgba(232,115,74,0.1)' }}>
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#4a4a5c] leading-relaxed">
                  {faq.hasList ? (
                    <div>
                      <p className="mb-3">With proper care:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2d8a5e]" />
                          <span><strong>Whitening:</strong> 1–3 years</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2d8a5e]" />
                          <span><strong>Bonding:</strong> 3–7 years</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2d8a5e]" />
                          <span><strong>Veneers:</strong> 10–15+ years</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2d8a5e]" />
                          <span><strong>Invisalign results:</strong> lifelong with retainers</span>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    faq.answer
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER TREATMENTS TO CONSIDER */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2d8a5e] mb-4">
              Explore More Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Other Treatments to Consider
            </h2>
            <p className="text-lg text-[#4a4a5c] max-w-2xl mx-auto">
              Patients interested in cosmetic dentistry also commonly explore:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherTreatments.map((treatment) => (
              <Link 
                key={treatment.title}
                href={treatment.href} 
                className="group bg-[#fafafa] rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(45,138,94,0.1)' }}>
                    <treatment.icon className="h-5 w-5 text-[#2d8a5e]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] group-hover:text-[#2d8a5e] transition-colors">
                    {treatment.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4a4a5c] leading-relaxed">
                  {treatment.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2e44 0%, #0a3d1f 50%, #052a16 100%)' }}>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6" style={{ color: '#f08565' }} />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Whether you&apos;re looking for subtle refinements or a complete transformation, Cherry Creek South Dental is here to help you achieve a smile you love.
          </p>
          <a
            href="tel:(303) 377-7744"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition hover:scale-105"
            style={{ backgroundColor: '#e8734a', color: '#ffffff' }}
          >
            Schedule Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

