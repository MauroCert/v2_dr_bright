import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call us',
    primary: '(303) 377-7744',
    secondary: 'Speak with our front desk',
    href: 'tel:(303) 377-7744',
  },
  {
    icon: MessageCircle,
    title: 'Text us',
    primary: '(720) 864-1333',
    secondary: 'Quick questions or updates',
    href: 'sms:(720) 864-1333',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    primary: '5055 E Kentucky Ave',
    secondary: 'Denver, CO 80246',
    href: 'https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246',
  },
];

const hours = [
  { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 4:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 4:00 PM' },
  { day: 'Thursday', hours: '7:00 AM – 1:00 PM' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  return (
    <div className="bg-[var(--canvas)]">
      {/* Hero */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--teal)]">Contact us</p>
          <h1 className="mt-4 text-4xl font-semibold">We make it easy to call, text, or plan your visit online.</h1>
          <p className="mt-4 text-lg text-[var(--soft-text)]">
            Use whichever channel feels best—phone, text, or our form. We’ll send forms, review insurance, and help you experience the same concierge energy found in v1.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map(({ icon: Icon, title, primary, secondary, href }) => (
              <a
                key={title}
                href={href}
                className="rounded-3xl border border-[var(--shell)] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
              >
                <Icon className="mx-auto h-10 w-10 text-[var(--clay)]" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--pine)]">{title}</h3>
                <p className="mt-2 text-lg font-semibold">{primary}</p>
                <p className="text-sm text-[var(--soft-text)]">{secondary}</p>
              </a>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <form className="rounded-3xl border border-[var(--shell)] bg-white p-8 shadow-sm space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-[var(--pine)]">First Name *</label>
                  <input type="text" required className="mt-2 w-full rounded-2xl border border-[var(--shell)]/70 px-4 py-3" placeholder="Jane" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[var(--pine)]">Last Name *</label>
                  <input type="text" required className="mt-2 w-full rounded-2xl border border-[var(--shell)]/70 px-4 py-3" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--pine)]">Phone *</label>
                <input type="tel" required className="mt-2 w-full rounded-2xl border border-[var(--shell)]/70 px-4 py-3" placeholder="(303) 123-4567" />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--pine)]">Email</label>
                <input type="email" className="mt-2 w-full rounded-2xl border border-[var(--shell)]/70 px-4 py-3" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--pine)]">Preferred contact method</label>
                <select className="mt-2 w-full rounded-2xl border border-[var(--shell)]/70 px-4 py-3">
                  <option>Phone call</option>
                  <option>Text message</option>
                  <option>Email</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-[var(--pine)]">Message</label>
                <textarea rows={4} className="mt-2 w-full rounded-2xl border border-[var(--shell)]/70 px-4 py-3" placeholder="Tell us how we can help" />
              </div>
              <button type="submit" className="w-full rounded-full bg-[var(--clay)] py-3 text-sm font-semibold text-white">
                Send message
              </button>
            </form>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--pine)]">Office Hours</h3>
                <div className="mt-4 space-y-3 text-sm text-[var(--soft-text)]">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="flex items-center justify-between border-b border-[var(--shell)]/40 pb-2 last:border-b-0 last:pb-0">
                      <span className="font-semibold text-[var(--pine)]">{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[var(--surface)] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--pine)]">
                    <Clock className="h-4 w-4 text-[var(--clay)]" /> Emergency Care
                  </div>
                  <p className="mt-2 text-sm text-[var(--soft-text)]">
                    Call us if you experience tooth pain, swelling, or trauma. We keep time reserved for urgent visits.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[var(--pine)] p-8 text-white">
                <h3 className="text-2xl font-semibold">Need directions?</h3>
                <p className="mt-3 text-white/80">
                  We’re near Cherry Creek Trail with convenient parking. Tap below for a map.
                </p>
                <a
                  href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--clay)]"
                >
                  Open map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-[var(--pine)] py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
          <h2 className="text-3xl font-semibold">Dental emergency?</h2>
          <p className="text-white/80">
            Call or text us immediately. If it’s after hours, follow the voicemail prompts to reach the on-call team or visit the nearest emergency room.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:(303) 377-7744" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--pine)]">
              Emergency: (303) 377-7744
            </a>
            <a href="sms:(720) 864-1333" className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
              Text emergency line
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
