import Image from "next/image";
import {
  benefits,
  faqs,
  nav,
  programs,
  site,
  stats,
  steps,
  testimonials,
} from "@/content/site";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.7C5.8.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.66L.6 23.3l5.73-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function JoinButton({ className = "", label = "Gabung Grup WhatsApp" }) {
  return (
    <a
      href={site.whatsappGroupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-wa px-6 py-3 font-semibold text-white shadow-sm transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-earth">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={371} height={428} priority className="h-10 w-auto" />
          <span className="leading-tight">
            <span className="block font-bold text-ink">{site.name}</span>
            <span lang="ar" dir="rtl" className="block font-arabic text-sm text-brand">
              {site.nameArabic}
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>
        <JoinButton label="Gabung" className="px-4 py-2 text-sm" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pattern-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-brand-soft px-4 py-1 text-sm font-semibold text-brand">
            Komunitas Belajar Bahasa Arab Online
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Belajar Bahasa Arab
            <span className="block text-brand">{site.tagline.toLowerCase()}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <JoinButton className="text-lg" />
            <a
              href="#program"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand-soft"
            >
              Lihat Program
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-white p-10 text-center shadow-xl ring-8 ring-brand-soft">
            <Image
              src="/logo.png"
              alt={`Logo ${site.name}`}
              width={371}
              height={428}
              priority
              className="mx-auto h-40 w-auto sm:h-48"
            />
            <p lang="ar" dir="rtl" className="mt-6 font-arabic text-4xl leading-relaxed text-brand sm:text-5xl">
              {site.nameArabic}
            </p>
            <div className="mx-auto my-4 h-px w-24 bg-earth/40" />
            <p className="text-xl font-semibold text-ink">{site.name}</p>
            <p className="mt-1 text-earth">{site.tagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Statistik komunitas" className="bg-brand-dark">
      <dl className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-10 text-center sm:px-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="text-sm text-brand-soft">{s.label}</dt>
            <dd className="text-3xl font-extrabold text-gold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Tentang Kami"
        title="Mengapa belajar di Fashihul Fushoha?"
        subtitle="Kami membantu siapa saja memahami dan menggunakan bahasa Arab fusha, dari mengenal huruf hingga lancar berbicara."
      />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <div key={b.title} className="rounded-2xl border border-line bg-white p-6">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold-soft font-bold text-brand">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
            <p className="mt-2 text-muted">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="program" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Program"
        title="Program yang sedang berjalan"
        subtitle="Pilih program sesuai level dan kebutuhanmu."
      />
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {programs.map((p) => (
          <article key={p.name} className="flex flex-col rounded-2xl border border-line bg-cream p-6">
            <span className="self-start rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              {p.level}
            </span>
            <h3 className="mt-4 text-xl font-bold text-ink">{p.name}</h3>
            <p className="mt-2 flex-1 text-muted">{p.description}</p>
            <dl className="mt-6 space-y-1 border-t border-line pt-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Jadwal</dt>
                <dd className="font-medium text-ink">{p.schedule}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Biaya</dt>
                <dd className="font-medium text-ink">{p.price}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center text-muted">
        Info pendaftaran tiap program dibagikan di grup WhatsApp.
      </p>
    </section>
  );
}

function Method() {
  return (
    <section id="metode" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Alur Belajar" title="Mulai belajar dalam 4 langkah" />
      <ol className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl bg-brand p-6 text-white">
            <span className="text-4xl font-extrabold text-gold">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-brand-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Testimoni" title="Kata mereka yang sudah belajar" />
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-line bg-cream p-6">
            <blockquote className="text-ink">
              <span className="font-arabic text-4xl leading-none text-earth">“</span>
              <p className="-mt-2">{t.quote}</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-bold text-brand">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan" />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-line bg-white p-5 open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              {f.q}
              <span className="text-2xl leading-none text-brand transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="pattern-bg mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Siap mulai belajar bahasa Arab?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-brand-soft">
          Gabung bersama komunitas Fashihul Fushoha dan mulai perjalananmu, {site.tagline.toLowerCase()}.
        </p>
        <JoinButton className="mt-8 text-lg" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Image src="/logo.png" alt="" width={371} height={428} className="mb-3 h-12 w-auto" />
          <p className="font-bold text-ink">{site.name}</p>
          <p lang="ar" dir="rtl" className="font-arabic text-lg text-brand">
            {site.nameArabic}
          </p>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Kontak</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li>
              <a href={`https://wa.me/${site.adminWhatsapp}`} className="hover:text-brand">
                WhatsApp Admin
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-ink">Media Sosial</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-brand">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-sm text-muted">
        © {site.copyrightYear} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Method />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
