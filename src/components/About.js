import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pillars = [
  "Friendly explanations before every treatment",
  "Digital diagnostics for more confident planning",
  "A calm clinic atmosphere that reduces anxiety",
  "Flexible support for families and urgent visits",
];

export default function AboutSection() {
  return (
    <section className="section-shell px-4 sm:px-6 md:px-8">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-5 top-10 h-[84%] w-[82%] rounded-[2rem] bg-[#d6ebe5]" />
          <div className="card-surface relative overflow-hidden rounded-[2.1rem] p-4">
            <div className="relative overflow-hidden rounded-[1.7rem]">
              <Image
                src="/about-img.png"
                alt="Dentist speaking with a patient during a personalized consultation at CrystalFloss Dental Clinic"
                width={560}
                height={650}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 right-8 rounded-[1.5rem] border border-white/50 bg-white/90 px-5 py-5 shadow-[0_18px_35px_rgba(22,49,59,0.12)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#10978f]">
                Patient-first care
              </p>
              <p className="mt-2 font-[family:var(--font-cormorant)] text-5xl font-bold leading-none text-[#16313b]">
                15+
              </p>
              <p className="mt-1 max-w-[160px] text-sm font-semibold leading-6 text-[#5f7480]">
                years helping Noida families smile with confidence
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[700px]">
          <p className="section-kicker">Why local families choose CrystalFloss</p>
          <h2 className="section-title text-left">
            Dentistry that feels more human, more transparent, and far less intimidating.
          </h2>
          <p className="section-copy max-w-[620px]">
            We built CrystalFloss Dental Clinic for people who want more than quick appointments and clinical language.
            Our team takes time to understand your concerns, explain your options in plain words, and shape treatment
            around the way you actually live.
          </p>
          <p className="mt-4 max-w-[620px] text-[16px] leading-8 text-[#5f7480]">
            That means personalized checkups, smile-focused planning, gentle dentistry for anxious patients, and a
            trusted dental clinic in Noida where adults and children both feel looked after.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((item) => (
              <div key={item} className="rounded-[1.35rem] border border-[#d6e4df] bg-white/80 px-5 py-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#18b7ae]" />
                  <p className="text-[15px] font-medium leading-7 text-[#294652]">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-primary mt-9 gap-2">
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
