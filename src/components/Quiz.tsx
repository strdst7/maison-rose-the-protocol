import { useEffect, useMemo, useRef, useState } from "react";
import type { AnswerRecord, Question } from "../types";
import { CornerFlourishes, CrestMark, DiamondRule } from "./Ornament";

type QuizProps = {
  name: string;
  questions: Question[];
  onComplete: (answers: AnswerRecord[]) => void;
};

const letters = ["A", "B", "C", "D"];

export default function Quiz({ name, questions, onComplete }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const answersRef = useRef<AnswerRecord[]>([]);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);

  const question = questions[index];
  const progress = ((index + (revealed ? 1 : 0)) / questions.length) * 100;
  const correct = selected === question.correctId;

  const greeting = useMemo(() => {
    if (!name) return "Darling";
    return name;
  }, [name]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const map: Record<string, string> = { "1": "a", "2": "b", "3": "c", "4": "d" };
      if (!revealed && map[e.key]) {
        choose(map[e.key]);
      }
      if (revealed && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        advance();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function choose(id: string) {
    if (revealed) return;
    setSelected(id);
    setRevealed(true);
    const isCorrect = id === question.correctId;
    const nextAnswers = [
      ...answersRef.current,
      { questionId: question.id, selectedId: id, correct: isCorrect },
    ];
    answersRef.current = nextAnswers;
    if (isCorrect) {
      const next = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: 30 + Math.random() * 40,
        y: 20 + Math.random() * 40,
      }));
      setSparks(next);
      window.setTimeout(() => setSparks([]), 900);
    }
  }

  function advance() {
    if (index + 1 >= questions.length) {
      onComplete(answersRef.current);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,5,8,0.55), rgba(7,5,8,0.92)), url(/images/texture.jpg)",
          backgroundSize: "cover",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(106,42,58,0.28),_transparent_50%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-6 sm:px-6">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CrestMark className="h-9 w-9" />
            <div>
              <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Rose Protocol</p>
              <p className="font-serif text-sm italic text-blush">For {greeting}</p>
            </div>
          </div>
          <p className="font-serif text-sm text-mist">
            <span className="text-gold">{question.numeral}</span>
            <span className="mx-1 text-gold/40">/</span>
            XII
          </p>
        </header>

        <div className="mb-6 h-[2px] overflow-hidden rounded-full bg-wine/40">
          <div
            className="h-full bg-gradient-to-r from-wine via-gold to-champagne transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <article
          key={question.id}
          className="gold-border relative flex-1 overflow-hidden rounded-[28px] bg-plum/70 p-5 backdrop-blur-md sm:p-8"
        >
          <CornerFlourishes />
          {sparks.map((s) => (
            <span
              key={s.id}
              className="ornament-spark"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            />
          ))}

          <p className="text-[10px] tracking-[0.34em] text-gold uppercase">
            Sitting {question.numeral} · {question.chapter}
          </p>
          <p className="mt-3 font-serif text-xl italic leading-snug text-blush sm:text-2xl">
            {question.whisper}
          </p>
          <DiamondRule className="my-5" />
          <h2 className="font-serif text-2xl leading-snug text-cream sm:text-3xl">
            {question.prompt}
          </h2>

          <ul className="mt-6 space-y-3">
            {question.options.map((opt, i) => {
              const isPicked = selected === opt.id;
              const isRight = opt.id === question.correctId;
              let tone =
                "border-gold/20 bg-ink/40 hover:border-gold/50 hover:bg-ink/70";
              if (revealed && isRight) {
                tone = "border-sage/70 bg-sage/10 shadow-[0_0_0_1px_rgba(183,199,176,0.25)]";
              } else if (revealed && isPicked && !isRight) {
                tone = "border-rose/60 bg-wine/25";
              } else if (isPicked) {
                tone = "border-gold bg-gold/10";
              }

              return (
                <li key={opt.id}>
                  <button
                    type="button"
                    disabled={revealed}
                    onClick={() => choose(opt.id)}
                    className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${tone} ${
                      revealed ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <span className="option-letter mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-sm text-gold">
                      {letters[i]}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-champagne sm:text-[15px]">
                      {opt.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {revealed && (
            <div className="animate-fade-up mt-6 rounded-2xl border border-gold/25 bg-ink/50 p-5">
              <p className="text-[10px] tracking-[0.3em] text-gold uppercase">
                {correct ? "Held · well done" : "Noted · without shame"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-blush">{question.insight}</p>
              <button
                type="button"
                onClick={advance}
                className="mt-5 w-full rounded-full bg-gradient-to-r from-wine to-[#8a3a4c] py-3 text-[11px] tracking-[0.28em] text-champagne uppercase transition hover:brightness-110 sm:w-auto sm:px-8"
              >
                {index + 1 >= questions.length ? "See your standing" : "Next sitting"}
              </button>
            </div>
          )}
        </article>

        <p className="mt-4 text-center text-[10px] tracking-[0.22em] text-mist/80 uppercase">
          Keys 1–4 to answer · Enter to continue
        </p>
      </div>
    </div>
  );
}
