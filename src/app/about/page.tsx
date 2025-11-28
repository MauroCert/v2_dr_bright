import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Heart, Sparkles, Users } from 'lucide-react';

const values = [
  {
    title: 'Patient-First Care',
    description: 'Longer appointments, judgement-free education, and plans created with you, not for you.',
    icon: Heart,
  },
  {
    title: 'Time-Rich Experience',
    description: 'Cleanings are 60–90 minutes so diagnostics, explanations, and treatment feel calm.',
    icon: Clock,
  },
  {
    title: 'Advanced Technology',
    description: 'AI-powered x-rays, CBCT imaging, and same-day digital scans for precision and clarity.',
    icon: Sparkles,
  },
  {
    title: 'Family-Owned',
    description: 'Independent and locally rooted, with a team who remembers every story and smile.',
    icon: Users,
  },
];

const milestones = [
  {
    heading: 'Atrium-inspired atmosphere',
    detail: 'Natural light, greenery, and hospitality cues reduce anxiety from the moment you arrive.',
  },
  {
    heading: 'Technology woven into every visit',
    detail: 'AI x-rays, CBCT, intraoral scanners, and Invisalign® planning keep treatment modern.',
  },
  {
    heading: 'Collaborative treatment plans',
    detail: 'We co-create plans chairside so you understand the why, what, and how behind every step.',
  },
];

export default function About() {
  return (
    <div className="bg-[var(--canvas)]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/drbright-lobby.jpg" alt="Cherry Creek South Dental lobby" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">About Cherry Creek South Dental</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Family-owned dentistry focused on calm energy, personal time, and clear answers.
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            From the atrium filled with plants to AI-assisted diagnostics, everything we do is designed to make your visit feel welcoming,
            transparent, and collaborative.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white"
            >
              Plan a visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about/dr-bright"
              className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white"
            >
              Meet Dr. Bright
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Our story</p>
            <h2 className="text-3xl font-semibold">Independent, family-owned, and proud to give patients more time.</h2>
            <p className="text-lg text-[var(--soft-text)]">
              Dr. Bright grew Cherry Creek South Dental around the idea that dentistry should feel collaborative and restorative—not rushed.
              Longer hygiene visits (often 60–90 minutes), thoughtful technology, and an emphasis on co-planning empower every patient to understand their care.
            </p>
            <p className="text-[var(--soft-text)]">
              Patients love the conservative, patient-first approach, the calming atrium with plants, and the seamless blend of facial aesthetics,
              Invisalign®, implants, and preventive care under one roof.
            </p>
            <ul className="space-y-3 text-sm text-[var(--soft-text)]">
              {milestones.map((item) => (
                <li key={item.heading} className="rounded-2xl border border-[var(--shell)] bg-white/70 p-4">
                  <p className="text-sm font-semibold text-[var(--pine)]">{item.heading}</p>
                  <p className="text-sm text-[var(--soft-text)]">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="rounded-2xl bg-[var(--surface)] p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Practice snapshot</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-4xl font-semibold text-[var(--pine)]">60–90</p>
                  <p className="text-sm text-[var(--soft-text)]">Minute preventive visits</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-[var(--pine)]">2</p>
                  <p className="text-sm text-[var(--soft-text)]">Lines to call or text anytime</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-[var(--pine)]">∞</p>
                  <p className="text-sm text-[var(--soft-text)]">Calm, judgement-free conversations</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-[var(--pine)]">1</p>
                  <p className="text-sm text-[var(--soft-text)]">Family-owned practice serving Denver</p>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[var(--shell)] bg-[var(--surface)] p-6 text-[var(--pine)]">
              <p className="text-sm font-medium text-[var(--pine)]">
                “We provide the best quality oral and overall healthcare through honesty, education, and joyful experiences.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[var(--sage)]">Cherry Creek South Dental</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Guiding values</p>
            <h2 className="mt-3 text-3xl font-semibold">The promises we bring to every appointment.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm">
                <Icon className="mx-auto h-10 w-10 text-[var(--clay)]" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--soft-text)]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Meet the team</p>
            <h2 className="mt-3 text-3xl font-semibold">People who thrive on concierge-level hospitality.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[var(--shell)] bg-white p-6 shadow-sm">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image src="/images/drbright-patient.jpg" alt="Dr. Bright" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">Dr. Bright</h3>
              <p className="text-sm text-[var(--soft-text)]">
                Lead dentist focused on comprehensive, conservative, and technologically advanced care.
              </p>
              <Link href="/about/dr-bright" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--clay)]">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-[var(--shell)] bg-white p-6 shadow-sm">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image src="/images/drbright-lobby.jpg" alt="Team" fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">Our Team</h3>
              <p className="text-sm text-[var(--soft-text)]">
                Hygienists, assistants, and patient experience experts who keep the energy joyful and organized.
              </p>
              <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--clay)]">
                Say hello
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface)] py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-[var(--shell)] bg-white px-4 py-12 text-center text-[var(--pine)] shadow-sm">
          <h2 className="text-3xl font-semibold">Ready to experience dentistry that moves at your pace?</h2>
          <p className="text-[var(--soft-text)]">
            Call, text, or request an appointment online. We’ll guide you through forms, insurance, and finding the time that works best for you.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:(303) 377-7744" className="rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--teal)]">
              Call (303) 377-7744
            </a>
            <a href="sms:(720) 864-1333" className="rounded-full border border-[var(--pine)] px-6 py-3 text-sm font-semibold text-[var(--pine)] hover:bg-[var(--pine)] hover:text-white">
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
