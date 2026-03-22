import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { clinic } from "@/lib/site";

const highlights = [
  "Comfort-first family dentistry",
  "Smile makeovers and cosmetic care",
  "Emergency appointments available",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="absolute inset-0 soft-grid opacity-40" />
      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="max-w-[680px]">
          <div className="pill-label flex items-center gap-1 ">
            <HeartHandshake className="h-4 w-4 text-[#18b7ae]" />
            Personalized dental care in Noida
          </div>

          <h1 className="mt-6 font-[family:var(--font-cormorant)] text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-[1.2] tracking-[-0.04em] text-[#16313b]">
            A warmer dental experience for every smile in your family.
          </h1>

          <p className="mt-5 max-w-[610px] text-[17px] leading-7 text-[#5f7480] sm:text-[18px]">
            {clinic.name} blends advanced dentistry with calm communication, honest treatment planning,
            and a polished clinic environment so every visit feels more personal, more reassuring, and
            easier to trust.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#d6e4df] bg-white/80 px-4 py-2 text-sm font-semibold text-[#294652]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/book_an_appointment" className="btn-primary gap-2">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Treatments
            </Link>
          </div>

          {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="card-surface px-5 py-5">
              <ShieldCheck className="h-9 w-9 text-[#18b7ae]" />
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#10978f]">
                Prevention
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#5f7480]">
                Routine checkups, digital evaluations, and proactive care.
              </p>
            </div>
            <div className="card-surface px-5 py-5">
              <Sparkles className="h-9 w-9 text-[#18b7ae]" />
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#10978f]">
                Cosmetics
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#5f7480]">
                Smile enhancements designed to look natural and balanced.
              </p>
            </div>
            <div className="card-surface px-5 py-5">
              <CalendarDays className="h-9 w-9 text-[#18b7ae]" />
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-[#10978f]">
                Flexible Visits
              </p>
              <p className="mt-2 text-[15px] leading-7 text-[#5f7480]">
                Easy scheduling for families, busy professionals, and urgent needs.
              </p>
            </div>
          </div> */}
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute left-8 top-8 h-[72%] w-[76%] rounded-[2rem] bg-[#d7ebe6]" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#18b7ae]/14 blur-3xl" />
          <div className="card-surface relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,183,174,0.12),rgba(255,255,255,0.24))]" />
            <div className="relative rounded-[1.6rem] bg-[#e8f3ef]">
              <Image
                src="/Hero-img.png"
                alt="Smiling dentist welcoming a patient at CrystalFloss Dental Clinic in Noida"
                width={620}
                height={760}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-8 left-0 right-0 mx-auto grid w-[calc(100%-2.5rem)] gap-3 sm:grid-cols-2">
              <div className="rounded-[1.3rem] border border-white/55 bg-[rgba(255,255,255,0.86)] px-5 py-4 shadow-[0_16px_40px_rgba(22,49,59,0.08)] backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10978f]">
                  Local trust
                </p>
                <p className="mt-2 text-lg font-semibold text-[#16313b]">
                  Family-friendly care with modern diagnostics
                </p>
              </div>
              <div className="rounded-[1.3rem] bg-[#16313b] px-5 py-4 text-white shadow-[0_18px_38px_rgba(22,49,59,0.16)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fe8e2]">
                  Personalized plans
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Clear treatment advice, cost guidance, and gentle follow-ups
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
