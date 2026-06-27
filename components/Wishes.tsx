import { withBasePath } from "@/lib/paths";

export function Wishes({ image, text }: { image: string; text: string }) {
  return (
    <section className="relative px-6 py-8">
      <div className="wishes-panel relative rounded-[28px] bg-[#d8799e] px-6 py-7 text-center text-white shadow-[0_12px_28px_rgba(197,86,124,0.22)]">
        <div className="absolute -right-2 -top-3 h-8 w-16 rotate-6 bg-white/60 shadow-sticker tape" />
        <div className="absolute -left-3 bottom-5 h-8 w-14 -rotate-12 rounded-full border border-white/45" />
        <p className="font-display text-[24px] uppercase tracking-[0.08em]">Пожелание</p>
        <h2 className="mt-1 font-hand text-[26px] leading-none text-[#fff2f4]">
          Без цветов
        </h2>
        <p className="invite-small-copy mx-auto mt-4 max-w-[260px] text-white/92">{text}</p>
        <div className="mx-auto mt-5 h-8 w-28 border-t border-dashed border-white/55" />
      </div>
      <figure className="wishes-photo-card">
        <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-1 bg-white/70 shadow-sticker tape" />
        <img
          className="wishes-photo"
          src={withBasePath(image)}
          alt="Детское фото пары с букетом полевых цветов"
        />
      </figure>
    </section>
  );
}
