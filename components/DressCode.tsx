import type { inviteData } from "@/data/invite";

type DressCodeData = typeof inviteData.dressCode;

export function DressCode({ data }: { data: DressCodeData }) {
  return (
    <section className="relative px-6 py-5">
      <div className="dress-code-card relative mx-auto max-w-[292px] rounded-[26px_20px_28px_22px] bg-white/62 px-5 py-6 text-center shadow-[0_10px_24px_rgba(95,126,145,0.13)] ring-1 ring-[#8fb9d8]/35">
        <div className="absolute -top-3 left-9 h-7 w-16 -rotate-6 bg-white/70 shadow-sticker tape" />
        <div className="absolute -right-3 bottom-6 h-8 w-14 rotate-12 rounded-full border border-[#d67896]/35" />
        <p className="font-display text-[22px] uppercase tracking-[0.08em] text-[#c46a87]">
          {data.title}
        </p>
        <h2 className="mt-1 font-hand text-[25px] leading-none text-[#b85072]">
          {data.subtitle}
        </h2>
        <div
          className="mx-auto mt-4 h-7 w-24 rounded-[50%] border border-dashed border-[#d67896]/45"
          aria-hidden="true"
        />
        <p className="invite-small-copy mx-auto mt-4 max-w-[250px] text-[#805366]">
          {data.text}
        </p>
      </div>
    </section>
  );
}
