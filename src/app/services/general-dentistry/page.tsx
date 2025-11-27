import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const preventivePillars = [
  {
    title: 'Longer Hygiene Visits',
    copy: '60–90 minute cleanings allow ultrasonic + hand scaling, perio charting, and all your questions answered.',
    points: ['Ultrasonic + hand scaling combo', 'Perio charting each visit', 'Personalized home-care coaching'],
  },
  {
    title: 'Oral Cancer & Airway Screenings',
    copy: 'Every comprehensive visit includes oral cancer screenings, TMJ checks, and airway reviews for full-body wellness.',
    points: ['Head & neck exam', 'Airway + TMJ check', 'Lifestyle risk review'],
  },
  {
    title: 'AI Diagnostics + CBCT',
    copy: 'We blend AI x-rays and CBCT scans to catch changes early and explain them clearly.',
    points: ['AI-assisted x-rays', 'CBCT as needed', 'Digital photo documentation'],
  },
  {
    title: 'Comfort Menu',
    copy: 'Atrium vibes, laughing gas, blankets, and playlists keep every cleaning relaxed and judgement-free.',
    points: ['Weighted blankets', 'Laughing gas available', 'Breaks whenever you need them'],
  },
];

const faqs = [
  {
    question: 'How often should I come in for cleanings?',
    answer: 'Most preventive patients visit every six months, but we personalize intervals based on gum health, lifestyle, and your goals.',
  },
  {
    question: 'Do longer appointments cost more?',
    answer: 'No. We simply schedule fewer patients per day so you receive more time, clarity, and hospitality at each visit.',
  },
  {
    question: 'What if I have dental anxiety?',
    answer: 'Text us before your visit and we’ll note preferences. Nitrous oxide, blankets, a calm atrium, and gentle pacing are always available.',
  },
];

const otherTreatments = [
  'Periodontal therapy + maintenance',
  'Fluoride treatments and sealants',
  'Nightguards and bite guards',
  'Whitening touch-ups for members',
  'Membership plan savings on preventive care',
];

export default function GeneralDentistry() {
  return (
    <div className="bg-[var(--canvas)] text-[var(--pine)]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/drbright-patient.jpg" alt="General dentistry" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">General dentistry</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Preventive visits designed for calm, clarity, and connection.</h1>
          <p className="mt-4 text-lg text-white/80">
            Longer cleanings, AI diagnostics, and collaborative planning ensure every visit feels educational and uplifting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white"
            >
              Reserve a preventive visit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white"
            >
              Call (303) 377-7744
            </a>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Cleanings & prevention</p>
            <h2 className="mt-3 text-3xl font-semibold">Everything you loved in v1—restyled for v2.</h2>
            <p className="mt-3 text-[var(--soft-text)]">
              We kept the same structure and content, then elevated the layout to mirror the reference inspiration.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {preventivePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-[var(--shell)] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--pine)]">{pillar.title}</h3>
                <p className="mt-3 text-sm text-[var(--soft-text)]">{pillar.copy}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--soft-text)]">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--clay)]" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/drbright-lobby.jpg" alt="Atrium" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-2 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Atrium calm</p>
              <p className="text-2xl font-semibold">Plants, natural light, and music curated for relaxation.</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">First visit flow</p>
            <h2 className="text-3xl font-semibold">What preventive care feels like at Cherry Creek South Dental.</h2>
            <ol className="space-y-4 text-sm text-[var(--soft-text)]">
              <li className="rounded-2xl bg-[var(--surface)] p-4">
                <strong className="text-[var(--pine)]">1. Welcome & goals</strong>
                <p>Settle into the atrium lounge, grab a beverage, and share priorities with our team.</p>
              </li>
              <li className="rounded-2xl bg-[var(--surface)] p-4">
                <strong className="text-[var(--pine)]">2. Diagnostics & cleaning</strong>
                <p>AI-assisted x-rays, CBCT when needed, photography, and thorough hygiene care.</p>
              </li>
              <li className="rounded-2xl bg-[var(--surface)] p-4">
                <strong className="text-[var(--pine)]">3. Co-planning</strong>
                <p>Dr. Bright reviews everything chairside, answering questions as you go.</p>
              </li>
              <li className="rounded-2xl bg-[var(--surface)] p-4">
                <strong className="text-[var(--pine)]">4. Comfort & follow-up</strong>
                <p>Laughing gas, playlists, blankets, and text check-ins keep you supported.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Other treatments + FAQ */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Other treatments to consider</p>
            <h2 className="mt-3 text-3xl font-semibold">Connected services that support preventive care.</h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--soft-text)]">
              {otherTreatments.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[var(--clay)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">FAQs</p>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-[var(--shell)] bg-white p-5">
                  <summary className="cursor-pointer text-lg font-semibold text-[var(--pine)]">{faq.question}</summary>
                  <p className="mt-2 text-sm text-[var(--soft-text)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--pine)] py-20 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-semibold">Ready for preventive care that never feels rushed?</h2>
          <p className="text-white/80">
            Text or call to reserve your longer visit. We’ll send forms, review insurance, and make sure your experience matches the calm energy of our office.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="sms:(720) 864-1333" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--pine)]">
              Text (720) 864-1333
            </a>
            <Link href="/membership" className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
              View membership perks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
