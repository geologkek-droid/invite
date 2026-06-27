"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type IntroPhase = "closed" | "opening" | "done";

export function EnvelopeIntro({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<IntroPhase>("closed");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const openInvite = () => {
    if (phase !== "closed") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase("opening");
    timeoutRef.current = window.setTimeout(
      () => setPhase("done"),
      reduceMotion ? 80 : 1450
    );
  };

  return (
    <div
      className={`invite-intro-root ${phase !== "closed" ? "invite-is-revealed" : ""} ${
        phase === "done" ? "invite-main-revealed" : ""
      }`}
    >
      {children}
      {phase !== "done" ? (
        <button
          className={`envelope-intro ${phase === "opening" ? "is-opening" : ""}`}
          type="button"
          aria-label="Открыть письмо"
          onClick={openInvite}
        >
          <span className="envelope-doodles" aria-hidden="true">
            <svg viewBox="0 0 340 420" focusable="false">
              <path d="M45 95c16-13 38-8 44 10 13-6 28-1 34 11 12 0 22 8 25 18H38c-10-18-4-31 7-39Z" />
              <path d="M250 74c0 15 12 28 28 28M278 74c-16 0-28 13-28 28" />
              <path d="M60 314c18 10 42 10 60 0M67 330c14 8 32 8 46 0" />
              <path d="M276 292l4 9 10 1-8 6 2 10-8-5-8 5 2-10-8-6 10-1 4-9Z" />
              <path d="M98 252c-12-9-20-18-18-30 1-11 13-16 22-7 5 4 8 11 10 17 3-7 6-13 12-17 10-7 22-2 23 9 1 13-15 22-49 28Z" />
            </svg>
          </span>

          <span className="envelope-scene" aria-hidden="true">
            <span className="envelope-card">
              <span>05 сентября 2026</span>
              <strong>Тут кое-что для вас</strong>
            </span>
            <span className="envelope-body">
              <span className="envelope-back" />
              <span className="envelope-left" />
              <span className="envelope-right" />
              <span className="envelope-bottom" />
              <span className="envelope-flap" />
              <span className="envelope-seal" />
            </span>
          </span>

          <span className="envelope-copy">
            <span className="envelope-title">
              Маленькая история стала большой
            </span>
            <span className="envelope-subtitle">Откройте, когда будете готовы</span>
            <span className="envelope-cta">Открыть письмо</span>
          </span>
        </button>
      ) : null}
    </div>
  );
}
