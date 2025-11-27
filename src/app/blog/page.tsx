import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';

const posts = [
  {
    title: 'Why we schedule longer hygiene appointments',
    excerpt: 'A behind-the-scenes look at how 60–90 minute visits reduce anxiety and improve outcomes.',
    date: 'October 15, 2025',
  },
  {
    title: 'AI-powered x-rays explained',
    excerpt: 'We break down how AI technology supports earlier detection and clearer conversations.',
    date: 'September 30, 2025',
  },
  {
    title: 'Creating a calm dental experience at Cherry Creek South Dental',
    excerpt: 'Tour the atrium, amenities, and hospitality touches inspired by the questionnaire.',
    date: 'August 12, 2025',
  },
];

export default function Blog() {
  return (
    <div className="bg-[var(--canvas)]">
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold">Stories from our atrium, technology, and patient community.</h1>
          <p className="mt-4 text-lg text-[var(--soft-text)]">
            Same content plan as v1, restyled to match the McKee Family Dentistry inspiration.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-[var(--shell)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--teal)]">
                  <CalendarDays className="h-4 w-4" /> {post.date}
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--pine)]">{post.title}</h2>
                <p className="mt-2 text-sm text-[var(--soft-text)]">{post.excerpt}</p>
                <Link href="#" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--clay)]">
                  Read article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
