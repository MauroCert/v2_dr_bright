import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const signatureServices = [
  {
    title: 'Dental Exams & Cleanings',
    description:
      '60–90 minute preventive visits with AI x-rays, oral cancer screenings, periodontal therapy, and judgement-free education.',
    href: '/services/general-dentistry',
    badge: 'Preventive',
    image: '/images/drbright-patient.jpg',
    checklist: ['Longer hygiene visits', 'Oral cancer screenings', 'Personalized home-care coaching'],
  },
  {
    title: 'Cosmetic Dentistry & Veneers',
    description:
      'Custom veneers, bonding, whitening, and facial aesthetics planned with digital previews and collaborative design.',
    href: '/services#cosmetic',
    badge: 'Cosmetic',
    image: '/images/drbright-lobby.jpg',
    checklist: ['Smile design mockups', 'Whitening plans', 'Facial aesthetics'],
  },
  {
    title: 'Invisalign® & Orthodontics',
    description:
      'Discreet aligner plans with digital scanners, remote-friendly check-ins, and retention coaching from Dr. Bright.',
    href: '/services#invisalign',
    badge: 'Alignment',
    image: '/images/drbright-invisalign.png',
    imageType: 'logo',
    checklist: ['Digital impressions', 'Tray coaching', 'Retention planning'],
  },
  {
    title: 'Emergency Dentistry',
    description:
      'Same-day relief for tooth pain, chipped teeth, or infections with calm bedside manner and longer appointment reserves.',
    href: '/services#emergency',
    badge: 'Same-Day',
    image: '/images/drbright-lobby.jpg',
    checklist: ['Rapid diagnostics', 'Comfort menu', 'Medication coordination'],
  },
  {
    title: 'Implants, Crowns & Bridges',
    description:
      'Conservative restorative plans including implants, crowns, bridges, and bone preservation guided by CBCT scans.',
    href: '/services#restorative',
    badge: 'Restorative',
    image: '/images/drbright-covid-badge.png',
    imageType: 'logo',
    checklist: ['Guided implant partners', 'Immediate temporaries', 'Maintenance visits'],
  },
  {
    title: 'Sedation & Comfort',
    description:
      'Laughing gas, comfort amenities, and unrushed pacing for anxious patients or longer procedures.',
    href: '/services#sedation',
    badge: 'Comfort',
    image: '/images/drbright-patient.jpg',
    checklist: ['Nitrous oxide', 'Weighted blankets', 'Longer appointment buffers'],
  },
];

const otherTreatments = [
  'Botox® and facial aesthetics add-ons',
  'Whitening memberships & touch-ups',
  'Nightguards and TMJ support',
  'CBCT airway evaluations',
  'Membership plans for uninsured families',
];

const faqs = [
  {
    question: 'Do you offer online forms and scheduling?',
    answer: 'Yes. Patients can request appointments, complete forms, and text the team for quick follow-ups just like on our v1 site.',
  },
  {
    question: 'What ages do you treat?',
    answer: 'We welcome families, adults, young professionals, and seniors. Longer appointments help every age feel cared for.',
  },
  {
    question: 'Which technologies support your services?',
    answer: 'AI-powered x-rays, CBCT imaging, intraoral scanners, Invisalign® software, and digital photography guide every plan.',
  },
];

export default function Services() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--pine)]">
      {/* Hero */}
      <section className="bg-[var(--surface)] py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[var(--shell)] bg-white px-6 py-16 text-[var(--pine)] shadow-sm">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Our services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Comprehensive dentistry inspired by the calm, modern style of mylovelanddentist.com.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--soft-text)]">
            From preventive care to smile design, Cherry Creek South Dental mirrors the structure from v1 while refreshing every page with a softer, concierge aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--teal)]"
            >
              Request a visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center rounded-full border border-[var(--pine)] px-6 py-3 text-sm font-semibold text-[var(--pine)] hover:bg-[var(--pine)] hover:text-white"
            >
              Call (303) 377-7744
            </a>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Signature offerings</p>
            <h2 className="mt-3 text-3xl font-semibold">Guided by longer appointments, honest education, and technology.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {signatureServices.map((service) => (
              <div key={service.title} className="rounded-3xl border border-[var(--shell)] bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden rounded-3xl rounded-b-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={service.imageType === 'logo' ? 'object-contain bg-white p-8' : 'object-cover'}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--teal)]">
                    {service.badge}
                  </span>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-[var(--pine)]">{service.title}</h3>
                  <p className="text-sm text-[var(--soft-text)]">{service.description}</p>
                  <ul className="space-y-2 text-sm text-[var(--soft-text)]">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[var(--clay)]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center text-sm font-semibold text-[var(--clay)]">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other treatments */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Other treatments to consider</p>
              <h2 className="mt-3 text-3xl font-semibold">Built from the same v1 sitemap, now styled for v2.</h2>
              <p className="mt-4 text-[var(--soft-text)]">
                Every service page includes FAQs and cross-links so patients can easily navigate between cosmetic, restorative, preventive, and emergency care—mirroring the new guidelines.
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--shell)] bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-[var(--soft-text)]">
                {otherTreatments.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--clay)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold">Your questions, answered with the same calm energy as our office.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-[var(--shell)] bg-white p-5">
                <summary className="cursor-pointer text-lg font-semibold text-[var(--pine)]">{faq.question}</summary>
                <p className="mt-2 text-sm text-[var(--soft-text)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-[var(--shell)] bg-white px-4 py-12 text-center text-[var(--pine)] shadow-sm">
          <h2 className="text-3xl font-semibold">Need help choosing the right service?</h2>
          <p className="text-[var(--soft-text)]">
            Call or text to reserve a longer appointment block tailored to your goals. Our front desk will send forms, insurance estimates, and help coordinate specialty care if needed.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:(303) 377-7744" className="rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--teal)]">
              Call (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="rounded-full border border-[var(--pine)] px-6 py-3 text-sm font-semibold text-[var(--pine)] hover:bg-[var(--pine)] hover:text-white"
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
