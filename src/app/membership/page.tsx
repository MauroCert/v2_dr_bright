import Link from 'next/link';
import { CheckCircle2, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Adult Wellness',
    price: '$42 / month',
    includes: ['Two 60-minute cleanings', 'Annual exam + necessary x-rays', 'Whitening touch-up gel', '15% off restorative care'],
  },
  {
    name: 'Perio Support',
    price: '$58 / month',
    includes: ['3–4 periodontal maintenance visits', 'Irrigation + localized antibiotics', 'Complimentary fluoride', 'Savings on scaling & root planing'],
  },
  {
    name: 'Child + Teen',
    price: '$32 / month',
    includes: ['Two cleanings + exams', 'Fluoride + sealants as needed', 'Emergency exams at no charge', 'Discounts on ortho retainers'],
  },
];

const perks = [
  '10% off facial aesthetics, Invisalign®, and nightguards',
  'Priority scheduling for longer appointments',
  'Text-based check-ins and reminders',
  'No insurance hassles or hidden fees',
];

export default function Membership() {
  return (
    <div className="bg-[var(--canvas)]">
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Membership plans</p>
          <h1 className="mt-4 text-4xl font-semibold">A calmer alternative to traditional insurance.</h1>
          <p className="mt-4 text-lg text-[var(--soft-text)]">
            Built for families who love our longer appointments and conservative care. Enjoy preventive visits, whitening, and savings on the services you already use most.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">{tier.name}</p>
                <p className="mt-3 text-3xl font-semibold text-[var(--pine)]">{tier.price}</p>
                <ul className="mt-6 space-y-3 text-sm text-[var(--soft-text)] text-left">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--clay)]" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-[var(--clay)] py-2 text-sm font-semibold text-white">Join plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Perks</p>
              <h2 className="mt-3 text-3xl font-semibold">Membership perks built from patient feedback.</h2>
              <p className="mt-4 text-[var(--soft-text)]">
                Plans include everything from whitening gel refills to email/text reminders and access to same-day answers from our team.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--soft-text)]">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--clay)]" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">How it works</p>
              <ol className="mt-4 space-y-4 text-sm text-[var(--soft-text)]">
                <li className="rounded-2xl bg-[var(--surface)] p-4">
                  <strong className="text-[var(--pine)]">1. Choose your plan</strong>
                  <p>Pick the tier that matches your hygiene schedule—adult, perio, or child.</p>
                </li>
                <li className="rounded-2xl bg-[var(--surface)] p-4">
                  <strong className="text-[var(--pine)]">2. Enroll online or in office</strong>
                  <p>We’ll set up autopay and schedule your preventive visits right away.</p>
                </li>
                <li className="rounded-2xl bg-[var(--surface)] p-4">
                  <strong className="text-[var(--pine)]">3. Enjoy extra perks</strong>
                  <p>Members receive whitening gel refills, exclusive events, and first access to Invisalign® days.</p>
                </li>
              </ol>
              <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-[var(--clay)] px-6 py-3 text-sm font-semibold text-white">
                Talk with our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[var(--pine)] px-6 py-12 text-center text-white">
          <Sparkles className="mx-auto h-8 w-8 text-[var(--clay)]" />
          <h2 className="mt-4 text-3xl font-semibold">Let’s personalize a plan for your family.</h2>
          <p className="mt-3 text-white/80">
            Call or text the front desk and we’ll help you enroll, answer questions about coverage, and customize benefits around your goals.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="tel:(303) 377-7744" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--pine)]">
              Call (303) 377-7744
            </a>
            <a href="sms:(720) 864-1333" className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
