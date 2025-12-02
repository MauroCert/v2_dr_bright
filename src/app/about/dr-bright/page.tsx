import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, GraduationCap, Microscope } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Education & Training',
    detail: 'DDS with advanced coursework in cosmetic, implant, and aligner therapy.',
  },
  {
    icon: Microscope,
    title: 'Technology Focused',
    detail: 'Certified in CBCT diagnostics, AI-powered imaging, intraoral scanning, and Invisalign®.',
  },
  {
    icon: Award,
    title: 'Continuing Education',
    detail: 'Active in study clubs and facial aesthetics coursework to integrate whole-face harmony.',
  },
];

const philosophy = [
  'Collaborative conversations where treatment is built with patients, not presented to them.',
  'A calm touch rooted in longer appointments, gentle anesthetics, and transparent guidance.',
  'A belief that oral health, facial aesthetics, and overall confidence go hand in hand.',
];

export default function DrBright() {
  return (
    <div className="bg-[var(--canvas)]">
      {/* Hero */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Meet Dr. Bright</p>
            <h1 className="text-4xl font-semibold">Personal, tech-forward dentistry with a calm Denver spirit.</h1>
            <p className="text-lg text-[var(--soft-text)]">
              Dr. Bright enjoys caring for patients who value comprehensive care, co-planning, and transparent communication.
              He integrates AI diagnostics, CBCT, Invisalign®, implants, and facial aesthetics to create healthy, confident smiles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white"
              >
                Schedule with Dr. Bright
              </a>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-[var(--teal)] px-6 py-3 text-sm font-semibold text-[var(--teal)]"
              >
                About the practice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image src="/images/drbright-patient.jpg" alt="Dr. Bright" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Cherry Creek South Dental</p>
              <p className="text-2xl font-semibold">Comprehensive, conservative, and concierge-level care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Philosophy</p>
            <h2 className="mt-3 text-3xl font-semibold">Dentistry should feel like a calm conversation.</h2>
            <p className="mt-4 text-[var(--soft-text)]">
              Dr. Bright leans on conservative, informed, and honest recommendations. He spends more time getting to know each patient,
              reviews diagnostics chairside, and empowers people with the information they need to co-author their treatment plan.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--soft-text)]">
              {philosophy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--clay)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Credentials & Expertise</p>
            <h2 className="mt-3 text-3xl font-semibold">Training built for modern, comprehensive dentistry.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {credentials.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm">
                <Icon className="mx-auto h-10 w-10 text-[var(--clay)]" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--soft-text)]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--shell)] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Services with Dr. Bright</p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--soft-text)]">
              <li>• Comprehensive exams & longer cleanings</li>
              <li>• Cosmetic veneers, bonding, whitening, and facial aesthetics</li>
              <li>• Invisalign®, airway-focused dentistry, and collaborative implant planning</li>
              <li>• Emergency visits with calm, judgement-free energy</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-[var(--pine)] p-8 text-white">
            <h3 className="text-3xl font-semibold">Ready to meet Dr. Bright?</h3>
            <p className="mt-4 text-white/80">
              Call or text to reserve time with Dr. Bright. We’ll walk you through patient forms, insurance, and making the most of your longer visit.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:(303) 377-7744" className="flex items-center gap-3 hover:text-[var(--clay)]">
                <ArrowRight className="h-4 w-4" /> (303) 377-7744
              </a>
              <a href="sms:(720) 864-1333" className="flex items-center gap-3 hover:text-[var(--clay)]">
                <ArrowRight className="h-4 w-4" /> (720) 864-1333
              </a>
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--pine)]">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
