import { Footer } from "@/components/Footer";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { Hero } from "@/components/Hero";
import { StickerScatter } from "@/components/StickerScatter";
import { Timeline } from "@/components/Timeline";
import { Wishes } from "@/components/Wishes";
import { inviteData } from "@/data/invite";

export default function Home() {
  return (
    <EnvelopeIntro>
      <main className="min-h-screen overflow-hidden bg-[#eef8ff] px-3 py-4 text-[#6f3d4d] sm:px-6 sm:py-8">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.72),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(207,233,249,0.5),transparent_30%),linear-gradient(180deg,#f8fcff_0%,#eef8ff_45%,#fff7f7_100%)]" />
        <div className="fixed left-1/2 top-0 h-full w-[min(100%,430px)] -translate-x-1/2 bg-[repeating-linear-gradient(90deg,rgba(134,180,205,0.11)_0_1px,transparent_1px_22px)]" />

        <div className="relative mx-auto w-full max-w-[360px]">
          <div className="scrapbook-shell">
            <svg
              className="invite-doodles"
              viewBox="0 0 360 1180"
              aria-hidden="true"
              focusable="false"
            >
              <g className="doodle-blue">
                <circle cx="292" cy="94" r="18" />
                <path d="M292 56v16M292 116v16M254 94h16M314 94h16M266 68l11 11M307 109l11 11M318 68l-11 11M277 109l-11 11" />
                <path d="M34 164c17-14 42-8 47 11 14-7 31-2 37 12 14 0 25 8 28 20H28c-11-20-6-34 6-43Z" />
                <path d="M72 472c22 12 51 12 72 0M78 490c18 10 42 10 60 0M84 508c14 8 31 8 45 0" />
                <path d="M222 522l58-20 28 31h-94l8-11ZM237 502l18-34 16 28" />
              </g>
              <g className="doodle-pink">
                <path d="M58 340c-16-13-26-25-24-39 2-14 17-19 28-8 6 6 9 14 11 20 3-7 7-15 14-20 12-9 27-3 28 11 2 16-19 28-57 36Z" />
                <path d="M300 402l4 10 11 1-9 7 3 11-9-6-10 6 3-11-9-7 11-1 5-10Z" />
                <path d="M86 770l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1 4-8Z" />
                <path d="M290 824c-11-8-18-17-17-27 1-9 11-13 19-5 4 4 6 9 8 14 2-5 5-10 10-14 8-6 18-2 19 7 1 11-13 19-39 25Z" />
              </g>
            </svg>
            <StickerScatter />
            <Hero data={inviteData.hero} />
            <Timeline items={inviteData.timeline} />
            <Wishes image={inviteData.wishesImage} text={inviteData.wishes} />
            <Footer data={inviteData.footer} />
          </div>
        </div>
      </main>
    </EnvelopeIntro>
  );
}
