import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
} from 'lucide-react';

const services = [
  {
    title: 'Cosmetic & Facial Aesthetics',
    description: 'Veneers, bonding, whitening, Botox, and smile design plans tailored with digital previews.',
    href: '/services#cosmetic',
    tag: 'Confidence',
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Comprehensive Exams & Cleanings',
    description: 'Extended appointments with periodontal therapy, oral cancer screenings, and co-created plans.',
    href: '/services#preventive',
    tag: 'Wellness',
    image: '/images/drbright-lobby.jpg',
  },
  {
    title: 'Invisalign® & Orthodontics',
    description: 'Clear aligner care with concierge check-ins, digital impressions, and retention guidance.',
    href: '/services#invisalign',
    tag: 'Alignment',
    image: '/images/drbright-invisalign.png',
    imageType: 'logo',
  },
  {
    title: 'Implants, Crowns & Restorations',
    description: 'Conservative restorative dentistry, bridges, implants, and same-day answers.',
    href: '/services#restorative',
    tag: 'Restorative',
    image: '/images/drbright-covid-badge.png',
    imageType: 'logo',
  },
];

const patientPromises = [
  'Treatment plans are crafted together so you always understand your options.',
  'A calming atrium with natural light, plants, and longer visits keeps stress away.',
  'Technology like AI-powered x-rays, CBCT, and scanners provide clarity and precision.',
];

const visitSteps = [
  {
    title: 'Warm Welcome',
    detail: 'Atrium check-in, beverage bar, and time to share goals with the team.',
  },
  {
    title: 'Digital Diagnostics',
    detail: 'AI-assisted x-rays, CBCT when needed, and intraoral photography for context.',
  },
  {
    title: 'Co-Planning',
    detail: 'Dr. Bright reviews everything chairside so decisions are collaborative and conservative.',
  },
  {
    title: 'Comfort Menu',
    detail: 'Laughing gas, weighted blankets, curated playlists, and unrushed pacing.',
  },
];

const amenities = [
  'Atrium lounge with greenery and natural light',
  'Top-of-the-line digital scanner + CBCT imaging',
  'AI x-ray review for early detection',
  'Facial aesthetics to complement dentistry',
];

const techHighlights = [
  {
    heading: 'AI-Powered Diagnostics',
    text: 'We pair human expertise with AI to spot changes fast and explain them clearly.',
  },
  {
    heading: 'CBCT + 3D Imaging',
    text: 'Cone beam imaging and TMJ/bone density scans guide implants, Invisalign®, and airway insight.',
  },
  {
    heading: 'Digital Comforts',
    text: 'Intraoral scanners, same-day answers via text, and online forms keep visits seamless.',
  },
];

const faqs = [
  {
    question: 'What makes Cherry Creek South Dental different?',
    answer:
      'We are an independent, family-owned office that schedules fewer patients per day so every visit feels calm, collaborative, and personalized.',
  },
  {
    question: 'Do you really offer longer cleaning appointments?',
    answer:
      'Yes. Preventive visits are typically 60–90 minutes so we can complete diagnostics, answer questions, and finish treatment without rushing.',
  },
  {
    question: 'What services can I schedule online?',
    answer:
      'Everything from preventive care and Invisalign® consultations to cosmetic visits and emergency dentistry—our team will help you find the right time.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
    quote: '“The longer appointments felt luxurious. I finally understand my treatment plan and never felt rushed.”',
    },
    {
      name: 'Mike R.',
    quote: '“Family-owned practice with modern tech. AI x-rays plus a calm atrium made my visit stress-free.”',
    },
    {
      name: 'Jennifer L.',
    quote: '“They walk you through every option and the atmosphere is spa-like. I send all of my friends here.”',
    },
  ];

export default function Home() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--ink)]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.avif" alt="Cherry Creek South Dental hero" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-32 text-center text-white">
          <p
            className="text-xs uppercase tracking-[0.5em] drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)]"
            style={{ color: '#f8f4ee' }}
          >
              Cherry Creek South Dental
            </p>
          <h1
            className="mt-6 text-4xl font-semibold leading-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)] sm:text-5xl"
            style={{ color: '#ffffff' }}
          >
            Cherry Creek calm with concierge-level dentistry.
            </h1>
            </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/drbright-lobby.jpg" alt="Atrium lobby" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-2 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Our Story</p>
              <p className="text-2xl font-semibold">Family-owned, calm, and collaborative dentistry for Denver.</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Why families choose us</p>
            <h2 className="text-3xl font-semibold">Longer visits. Honest guidance. Technology that feels human.</h2>
            <p className="text-lg text-[var(--soft-text)]">
              Dr. Bright spends more time with each patient—often 60–90 minutes—so treatment feels conversational, never rushed.
              We plan care together, integrate AI for diagnostics, and keep anxiety low with a serene atrium filled with plants and natural light.
            </p>
            <ul className="space-y-3 text-sm text-[var(--soft-text)]">
              {patientPromises.map((promise) => (
                <li key={promise} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--clay)]" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center rounded-full border border-[var(--teal)] px-5 py-2 text-sm font-semibold text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white">
                Learn about the practice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about/dr-bright" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-[var(--clay)] hover:text-[var(--teal)]">
                Meet Dr. Bright
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Comprehensive services</p>
            <h2 className="mt-3 text-3xl font-semibold">Everything from preventive care to cosmetics in one calm space.</h2>
            <p className="mt-3 text-[var(--soft-text)]">Explore the same services from v1 with refreshed layouts inspired by McKee Family Dentistry.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group overflow-hidden rounded-3xl border border-[var(--shell)]/60 bg-white shadow-sm">
                <div className="relative h-56 overflow-hidden border-b border-[var(--shell)]/40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={service.imageType === 'logo' ? 'object-contain bg-white p-10' : 'object-cover'}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--teal)]">
                    {service.tag}
                  </span>
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-[var(--pine)]">{service.title}</h3>
                  <p className="text-[var(--soft-text)]">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-sm font-semibold text-[var(--clay)]">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--shell)] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">What to expect</p>
            <h2 className="mt-3 text-3xl font-semibold">A visit that feels like a guided conversation.</h2>
            <div className="mt-8 space-y-4">
              {visitSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl bg-[var(--surface)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--teal)]">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-[var(--soft-text)]">{step.detail}</p>
            </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--shell)] bg-white p-8 text-[var(--pine)] shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--sage)]">Amenities</p>
            <h2 className="mt-3 text-3xl font-semibold">Calm, modern, and tech-forward.</h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--soft-text)]">
              {amenities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Leaf className="mt-0.5 h-4 w-4 text-[var(--clay)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-[var(--surface)] p-6">
              <p className="text-sm text-[var(--soft-text)]">
                Memberships, online forms, and text-ready front desk support make every interaction simple.
              </p>
              <Link
                href="/membership"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--clay)] hover:text-[var(--teal)]"
              >
                Explore membership perks <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Technology + comfort</p>
            <h2 className="mt-3 text-3xl font-semibold">Tools that mirror the experience on mylovelanddentist.com.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {techHighlights.map((tech) => (
              <div key={tech.heading} className="rounded-3xl border border-[var(--shell)]/60 bg-white p-6 shadow-sm">
                <Sparkles className="h-6 w-6 text-[var(--clay)]" />
                <h3 className="mt-4 text-xl font-semibold">{tech.heading}</h3>
                <p className="mt-2 text-sm text-[var(--soft-text)]">{tech.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Reviews</p>
            <h2 className="mt-3 text-3xl font-semibold">Denver families share the calm they feel here.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-[var(--shell)]/60 bg-white p-6 shadow-sm">
                <div className="flex space-x-1 text-[var(--clay)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-[var(--soft-text)]">{testimonial.quote}</p>
                <p className="mt-6 text-sm font-semibold text-[var(--pine)]">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--shell)] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--pine)]">Answers to the questions we hear most.</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[var(--shell)] bg-[var(--surface)] p-5" open>
                  <summary className="cursor-pointer text-lg font-semibold text-[var(--pine)]">{faq.question}</summary>
                  <p className="mt-2 text-sm text-[var(--soft-text)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--shell)] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Plan your visit</p>
            <h3 className="mt-4 text-3xl font-semibold text-[var(--pine)]">Ready for a calmer dental experience?</h3>
            <p className="mt-4 text-sm text-[var(--soft-text)]">
              Call, text, or send a message through our online form. We’ll guide you through patient forms, insurance questions,
              and scheduling the longer time you deserve.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:(303) 377-7744" className="flex items-center gap-3 text-[var(--pine)] hover:text-[var(--clay)]">
                <Phone className="h-4 w-4 text-[var(--clay)]" /> (303) 377-7744
              </a>
              <a href="sms:(720) 864-1333" className="flex items-center gap-3 text-[var(--pine)] hover:text-[var(--clay)]">
                <MessageCircle className="h-4 w-4 text-[var(--clay)]" /> (720) 864-1333
              </a>
              <div className="flex items-center gap-3 text-[var(--soft-text)]">
                <MapPin className="h-4 w-4 text-[var(--clay)]" /> 5055 E Kentucky Ave, Denver, CO 80246
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--teal)]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
