import { useMemo, useState } from "react";
import { questions, rankFor } from "../data/quiz";
import type { AnswerRecord } from "../types";
import { CornerFlourishes, CrestMark, DiamondRule } from "./Ornament";

type ResultsProps = {
  name: string;
  answers: AnswerRecord[];
  onRetake: () => void;
  onHome: () => void;
};

export default function Results({ name, answers, onRetake, onHome }: ResultsProps) {
  const [copied, setCopied] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const score = answers.filter((a) => a.correct).length;
  const rank = rankFor(score);
  const who = name || "Darling";

  const rituals = useMemo(() => {
    const missed = answers
      .filter((a) => !a.correct)
      .map((a) => questions.find((q) => q.id === a.questionId)?.ritual)
      .filter(Boolean) as string[];
    if (missed.length >= 3) return missed.slice(0, 3);
    const extras = [
      "Gift a password manager to a friend this month. Armor looks better shared.",
      "Once a season, review who can tag you, locate you, and recover your email.",
      "Keep a paper copy of backup codes in a place only you would think to look.",
    ];
    return [...missed, ...extras].slice(0, 3);
  }, [answers]);

  async function share() {
    const text = `I am a ${rank.title} in The Rose Protocol — ${score}/12. A women's cybersecurity salon. Knowledge is the prettiest armor.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,5,8,0.3), rgba(7,5,8,0.94)), url(/images/salon.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,163,106,0.12),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onHome}
            className="flex items-center gap-2 text-mist transition hover:text-champagne"
          >
            <CrestMark className="h-9 w-9" />
            <span className="text-[10px] tracking-[0.28em] uppercase">The Circle</span>
          </button>
          <p className="font-script text-3xl text-gold-soft">Your standing</p>
        </header>

        <section className="gold-border relative grid overflow-hidden rounded-[28px] bg-plum/75 backdrop-blur-md md:grid-cols-[0.9fr_1.1fr]">
          <CornerFlourishes />
          <div className="relative min-h-[280px]">
            <img src={rank.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/20 to-transparent md:bg-gradient-to-r" />
            <img
              src="/images/lock.jpg"
              alt=""
              className="absolute bottom-5 left-5 hidden h-20 w-20 rounded-full object-cover ring-1 ring-gold/40 sm:block"
            />
          </div>
          <div className="p-6 sm:p-10">
            <p className="text-[10px] tracking-[0.34em] text-gold uppercase">
              {who} · Score {score} of 12
            </p>
            <h1 className="mt-2 font-serif text-4xl leading-tight text-cream sm:text-5xl">
              {rank.title}
            </h1>
            <p className="mt-2 font-script text-3xl text-gold-soft">{rank.epithet}</p>
            <DiamondRule className="my-6" />
            <p className="font-serif text-lg leading-relaxed text-blush">{rank.letter}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={share}
                className="rounded-full border border-gold/40 px-5 py-2.5 text-[11px] tracking-[0.22em] text-champagne uppercase transition hover:bg-gold/10"
              >
                {copied ? "Copied to the clipboard" : "Copy your title"}
              </button>
              <button
                type="button"
                onClick={onRetake}
                className="rounded-full bg-gradient-to-r from-wine to-[#8a3a4c] px-5 py-2.5 text-[11px] tracking-[0.22em] text-champagne uppercase transition hover:brightness-110"
              >
                Sit again
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {rituals.map((ritual, i) => (
            <article
              key={i}
              className="gold-border rounded-3xl bg-plum/60 p-5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-[10px] tracking-[0.28em] text-gold uppercase">
                Ritual {["I", "II", "III"][i]}
              </p>
              <p className="mt-3 font-serif text-lg leading-snug text-champagne">{ritual}</p>
            </article>
          ))}
        </section>

        <section className="gold-border mt-8 rounded-[28px] bg-plum/60 p-5 sm:p-8">
          <h2 className="font-serif text-3xl italic text-champagne">The sitting, reviewed</h2>
          <p className="mt-2 text-sm text-mist">
            Open any door you missed. Shame is not on the syllabus.
          </p>
          <ul className="mt-6 space-y-2">
            {questions.map((q, i) => {
              const record = answers[i];
              const open = openId === q.id;
              return (
                <li key={q.id} className="overflow-hidden rounded-2xl border border-gold/15 bg-ink/40">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : q.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          record?.correct ? "bg-sage" : "bg-rose"
                        }`}
                      />
                      <span className="font-serif text-gold">{q.numeral}</span>
                      <span className="text-sm text-cream">{q.chapter}</span>
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-mist uppercase">
                      {record?.correct ? "Held" : "Study"}
                    </span>
                  </button>
                  {open && (
                    <div className="border-t border-gold/10 px-4 py-4 text-sm leading-relaxed text-blush">
                      <p className="text-champagne">{q.prompt}</p>
                      <p className="mt-2">{q.insight}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <div className="mt-10 pb-6 text-center">
          <DiamondRule className="mx-auto mb-4 max-w-xs" />
          <p className="font-serif italic text-mist">
            The Rose Protocol · A women's cybersecurity salon
          </p>
          <p className="mt-2 text-xs text-mist/70">
            If you are in immediate danger, contact local emergency services. For intimate-image
            abuse, start at StopNCII.org.
          </p>
        </div>
      </div>
    </div>
  );
}
