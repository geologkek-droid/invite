import type { inviteData } from "@/data/invite";
import { withBasePath } from "@/lib/paths";

type HeroData = typeof inviteData.hero;

export function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative px-6 pb-7 pt-7 text-center">
      <div className="bow-doodle absolute left-8 top-9" />
      <div className="absolute right-8 top-8 h-8 w-8 rotate-12 rounded-full border border-[#d67896]/50" />
      <div className="absolute left-4 top-[242px] h-5 w-20 -rotate-6 bg-white/70 shadow-sticker tape" />

      <p className="hero-date font-hand text-[13px] tracking-[0.22em] text-[#b86682]">
        {data.date}
      </p>
      <h1 className="hero-title mt-3 font-display text-[28px] uppercase leading-none tracking-[0.04em] text-[#ca7793]">
        {data.title}
      </h1>

      <div className="hero-photo-stage relative mx-auto mt-7 w-[88%] max-w-[320px]">
        <svg
          className="hero-heart"
          viewBox="0 0 260 220"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M130 195C75 158 30 119 34 73c3-35 35-55 66-32 13 10 22 27 30 42 8-15 17-32 30-42 31-23 63-3 66 32 4 46-41 85-96 122Z"
          />
          <path
            d="M130 187C82 154 43 116 46 78c3-26 27-43 52-25 13 9 22 25 32 45 10-20 19-36 32-45 25-18 49-1 52 25 3 38-36 76-84 109Z"
          />
        </svg>
        <figure className="couple-hero-frame">
          <img
            className="couple-hero-image"
            src={withBasePath(data.heroImage)}
            alt="Детское фото пары"
          />
          <p className="hero-couple-names">{data.coupleNames}</p>
        </figure>
        <div className="absolute left-4 top-7 font-hand text-[24px] text-[#d67896]">
          love
        </div>
        <div className="absolute right-4 top-9 h-10 w-10 rounded-full border border-dashed border-[#d67896]/70" />
      </div>

      <div className="relative z-30 mx-auto mt-7 max-w-[250px]">
        <p className="font-display text-[22px] uppercase tracking-[0.05em] text-[#c46a87]">
          У нас свадьба!
        </p>
        <p className="hero-intro-copy invite-small-copy mt-3 text-[#805366]">{data.intro}</p>
      </div>
    </section>
  );
}
