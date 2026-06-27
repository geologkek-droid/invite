import type { inviteData } from "@/data/invite";

type FooterData = typeof inviteData.footer;

export function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="relative px-6 pb-10 pt-5 text-center">
      <div className="mx-auto mb-4 h-px w-28 bg-[#d67896]/45" />
      <p className="font-display text-[34px] uppercase leading-none tracking-[0.04em] text-[#c46a87]">
        {data.title}
      </p>
      <p className="mx-auto mt-3 max-w-[220px] font-hand text-[18px] leading-6 text-[#b85072]">
        {data.note}
      </p>
      <div className="mx-auto mt-6 h-8 w-24 rounded-[50%] border border-dashed border-[#d67896]/55" />
    </footer>
  );
}
