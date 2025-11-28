import Link from 'next/link';
import { CheckCircle2, CreditCard, FileText, HelpCircle, Shield } from 'lucide-react';

const faqs = [
  {
    question: 'How long are appointments?',
    answer: 'Preventive visits are typically 60–90 minutes so we can complete diagnostics, hygiene, and a collaborative review without feeling rushed.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'We work with most PPO plans, help you maximize benefits, and provide clear out-of-pocket estimates. We also offer a membership plan.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'You’ll enjoy atrium check-in, AI-assisted diagnostics, and time with Dr. Bright to co-plan next steps.',
  },
  {
    question: 'Do you treat children?',
    answer: 'Yes. Families love our calm energy, longer visits, and gentle explanations for every age.',
  },
];

const forms = [
  {
    title: 'New patient packet',
    items: ['Registration form', 'Medical history', 'HIPAA acknowledgment'],
  },
  {
    title: 'Consent forms',
    items: ['Treatment consent', 'Sedation consent', 'CBCT consent'],
  },
  {
    title: 'Financial documents',
    items: ['Insurance assignment', 'Financial agreement', 'Membership enrollment'],
  },
];

export default function PatientInfo() {
  return (
    <div className="bg-[var(--canvas)]">
      {/* Hero */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Patient information</p>
          <h1 className="mt-4 text-4xl font-semibold">Everything you need before stepping into our atrium.</h1>
          <p className="mt-4 text-lg text-[var(--soft-text)]">
            Save time by completing forms online, explore FAQs, and learn about insurance or membership options. This mirrors the v1 content with the new v2 styling.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="#faqs" className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm">
              <HelpCircle className="mx-auto h-10 w-10 text-[var(--clay)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">FAQs</h3>
              <p className="text-sm text-[var(--soft-text)]">Answers to popular questions</p>
            </Link>
            <Link href="#forms" className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm">
              <FileText className="mx-auto h-10 w-10 text-[var(--clay)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">Patient forms</h3>
              <p className="text-sm text-[var(--soft-text)]">Complete everything online</p>
            </Link>
            <Link href="#insurance" className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm">
              <CreditCard className="mx-auto h-10 w-10 text-[var(--clay)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">Insurance + payment</h3>
              <p className="text-sm text-[var(--soft-text)]">Understand your options</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold">The calm, transparent answers you expect from Dr. Bright.</h2>
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

      {/* Forms */}
      <section id="forms" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Patient forms</p>
            <h2 className="mt-3 text-3xl font-semibold">Download, complete, or text us for a link.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {forms.map((form) => (
              <div key={form.title} className="rounded-3xl border border-[var(--shell)] bg-white p-6 shadow-sm">
                <FileText className="h-8 w-8 text-[var(--clay)]" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">{form.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--soft-text)]">
                  {form.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--clay)]" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-[var(--clay)] py-2 text-sm font-semibold text-white">
                  Download
                </button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[var(--soft-text)]">
            Prefer paper versions? Arrive 10 minutes early and we’ll have everything ready for you.
          </p>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Insurance</p>
              <h2 className="mt-3 text-3xl font-semibold">We help you maximize your benefits.</h2>
              <div className="mt-6 space-y-4 text-sm text-[var(--soft-text)]">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[var(--clay)]" />
                  <p>Most PPO plans accepted. We verify coverage and file claims for you.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[var(--clay)]" />
                  <p>Transparent estimates presented before treatment so there are no surprises.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[var(--clay)]" />
                  <p>Out-of-network? We’ll provide itemized receipts and help you submit paperwork.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Payment + membership</p>
              <div className="mt-4 space-y-3 text-sm text-[var(--soft-text)]">
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-[var(--clay)]" />
                  <p>All major credit cards, HSA/FSA, and contactless payments accepted.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-[var(--clay)]" />
                  <p>Financing available through CareCredit and in-house plans for larger cases.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-[var(--clay)]" />
                  <p>Cherry Creek South Dental Membership: preventive visits, whitening touch-ups, and savings on periodontal therapy.</p>
                </div>
                <Link href="/membership" className="inline-flex items-center text-sm font-semibold text-[var(--clay)]">
                  View membership →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface)] py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-[var(--shell)] bg-white px-4 py-12 text-center text-[var(--pine)] shadow-sm">
          <h2 className="text-3xl font-semibold">Have another question?</h2>
          <p className="text-[var(--soft-text)]">
            Text, call, or email us anytime. We’ll walk you through insurance, forms, and what to expect on your first visit.
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
