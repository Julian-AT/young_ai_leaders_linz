"use client";

import { useEffect, useState } from "react";

export function useTypewriter(phrases: string[], typeSpeed = 60, pauseMs = 2200) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    if (!erasing && text === phrase) {
      const t = window.setTimeout(() => setErasing(true), pauseMs);
      return () => window.clearTimeout(t);
    }
    if (erasing && text === "") {
      const t = window.setTimeout(() => {
        setErasing(false);
        setPhraseIdx((p) => (p + 1) % phrases.length);
      }, 0);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(
      () => {
        if (erasing) setText((s) => s.slice(0, -1));
        else setText(phrase.slice(0, text.length + 1));
      },
      erasing ? typeSpeed / 2 : typeSpeed,
    );
    return () => window.clearTimeout(t);
  }, [text, phraseIdx, erasing, phrases, typeSpeed, pauseMs]);

  return text;
}
