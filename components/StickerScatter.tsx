import type { CSSProperties } from "react";

type StickerItem = {
  src: string;
  top: string;
  left?: string;
  right?: string;
  width: number;
  rotate: number;
  opacity: number;
  delay: string;
  duration: string;
  floatY: number;
  floatX: number;
  floatRotate: number;
};

const stickerItems: StickerItem[] = [
  { src: "/images/stickers/stars.png", top: "42px", right: "18px", width: 34, rotate: 10, opacity: 0.58, delay: "0.2s", duration: "8s", floatY: -3, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/flower-pink.png", top: "112px", left: "10px", width: 42, rotate: -12, opacity: 0.78, delay: "1.1s", duration: "9.5s", floatY: -4, floatX: -2, floatRotate: -2 },
  { src: "/images/stickers/heart.png", top: "232px", right: "12px", width: 28, rotate: 14, opacity: 0.72, delay: "0.7s", duration: "7.5s", floatY: -3, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/paper-plane.png", top: "374px", left: "14px", width: 46, rotate: -8, opacity: 0.62, delay: "1.6s", duration: "11s", floatY: -5, floatX: 3, floatRotate: 3 },
  { src: "/images/stickers/flower-daisy.png", top: "492px", right: "8px", width: 40, rotate: 9, opacity: 0.7, delay: "0.4s", duration: "8.8s", floatY: -4, floatX: -2, floatRotate: -2 },
  { src: "/images/stickers/thought-heart.png", top: "612px", left: "8px", width: 50, rotate: -5, opacity: 0.56, delay: "1.2s", duration: "12s", floatY: -5, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/stars.png", top: "724px", right: "16px", width: 30, rotate: -14, opacity: 0.5, delay: "0.9s", duration: "8.2s", floatY: -2, floatX: -2, floatRotate: -2 },
  { src: "/images/stickers/envelope.png", top: "828px", left: "12px", width: 48, rotate: 8, opacity: 0.62, delay: "1.8s", duration: "10.5s", floatY: -4, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/heart.png", top: "936px", right: "18px", width: 26, rotate: -10, opacity: 0.66, delay: "0.3s", duration: "7.8s", floatY: -3, floatX: -2, floatRotate: -2 },
  { src: "/images/stickers/flower-pink.png", top: "1048px", left: "18px", width: 36, rotate: 13, opacity: 0.64, delay: "1.4s", duration: "9.8s", floatY: -4, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/paper-plane.png", top: "1168px", right: "4px", width: 52, rotate: 11, opacity: 0.52, delay: "0.8s", duration: "12s", floatY: -5, floatX: -3, floatRotate: -3 },
  { src: "/images/stickers/flower-daisy.png", top: "1288px", left: "10px", width: 44, rotate: -11, opacity: 0.72, delay: "1.5s", duration: "10s", floatY: -4, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/stars.png", top: "1398px", right: "20px", width: 32, rotate: 7, opacity: 0.5, delay: "0.5s", duration: "8.5s", floatY: -2, floatX: -2, floatRotate: -2 },
  { src: "/images/stickers/thought-heart.png", top: "1498px", left: "6px", width: 46, rotate: 9, opacity: 0.55, delay: "1.9s", duration: "11.5s", floatY: -4, floatX: 2, floatRotate: 2 },
  { src: "/images/stickers/heart.png", top: "1590px", right: "12px", width: 30, rotate: -16, opacity: 0.68, delay: "0.6s", duration: "7.2s", floatY: -3, floatX: -2, floatRotate: -2 },
  { src: "/images/stickers/envelope.png", top: "1690px", left: "18px", width: 38, rotate: -6, opacity: 0.54, delay: "1.3s", duration: "10.8s", floatY: -4, floatX: 2, floatRotate: 2 }
];

export function StickerScatter() {
  return (
    <div className="sticker-scatter" aria-hidden="true">
      {stickerItems.map((item, index) => (
        <img
          alt=""
          className="sticker-scatter__item"
          draggable={false}
          key={`${item.src}-${index}`}
          src={item.src}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            width: `${item.width}px`,
            opacity: item.opacity,
            "--sticker-rotate": `${item.rotate}deg`,
            "--sticker-delay": item.delay,
            "--sticker-duration": item.duration,
            "--float-y": `${item.floatY}px`,
            "--float-x": `${item.floatX}px`,
            "--float-rotate": `${item.floatRotate}deg`
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
