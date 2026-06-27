import type { inviteData } from "@/data/invite";

type TimelineItem = (typeof inviteData.timeline)[number];

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  const zagsImage = (items[0] as TimelineItem & { zagsImage?: string }).zagsImage;

  return (
    <section className="relative px-7 py-8">
      <p className="timeline-heading mb-6 text-center font-display text-[24px] uppercase tracking-[0.08em] text-[#c46a87]">
        Тайминг дня
      </p>
      {zagsImage ? (
        <img
          className="timeline-zags-cutout"
          src={zagsImage}
          alt=""
          aria-hidden="true"
        />
      ) : null}

      <div className="relative z-10 mx-auto max-w-[260px] space-y-5">
        <div className="timeline-line absolute left-[25px] top-4 z-10 h-[calc(100%-28px)] border-l border-dashed border-[#d98aa2]/80" />
        {items.map((item, index) => (
          <div className="timeline-event relative z-10" key={item.time}>
            <article className="relative grid grid-cols-[52px_1fr] gap-3">
              <div className="timeline-dot relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#fbdde4] text-[#c95e7d] shadow-[0_8px_18px_rgba(194,93,125,0.18)]">
                <span className="timeline-icon" />
              </div>
              <div className="pt-1 text-left">
                <p className="font-display text-[25px] leading-none text-[#b85072]">
                  {item.time}
                </p>
                <h2 className="mt-1 font-display text-[20px] uppercase tracking-[0.04em] text-[#c46a87]">
                  {item.title}
                </h2>
                <p className="invite-small-copy mt-1 text-[#805366]">{item.place}</p>
              </div>
            </article>
            {index === 0 && item.notes.length > 0 ? (
              <div className="timeline-note relative ml-[66px] mt-4 rounded-[26px_18px_24px_18px] bg-white/52 px-4 py-3 text-left shadow-[0_8px_18px_rgba(194,93,125,0.1)] ring-1 ring-[#e5a1b5]/35">
                <div className="absolute -left-2 top-4 h-4 w-4 rotate-45 bg-white/60 ring-1 ring-[#e5a1b5]/25" />
                <p className="invite-small-copy text-[#b85072]">
                  {item.notes[0]}
                </p>
                <p className="invite-small-copy mt-1 text-[#805366]">{item.notes[1]}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
