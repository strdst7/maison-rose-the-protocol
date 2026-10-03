import { useState, type FormEvent } from "react";
import { questions } from "../data/quiz";
import { CornerFlourishes, CrestMark, DiamondRule, RoseKeyMark } from "./Ornament";

type LandingProps = {
  onBegin: (name: string) => void;
};

const pillars = [
  {
    title: "The lock on your name",
    copy: "Email, banking, the cloud that holds your photographs. We start where a stolen password becomes a stolen life.",
    image: "/images/lock.jpg",
  },
  {
    title: "The script in the DM",
    copy: "Romance scams, fake HR, a voice that sounds like her at the airport. You will learn to hear the costume.",
    image: "/images/rank-smart.jpg",
  },
  {
    title: "The uncoupling",
    copy: "Shared locations, old iPads, an ex who still “just knows” the password. Access is not nostalgia.",
    image: "/images/rank-guardian.jpg",
  },
];

export default function Landing({ onBegin }: LandingProps) {
  const [name, setName] = useState("");

  function begin(e?: FormEvent) {
    e?.preventDefault();
    onBegin(name.trim());
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,5,8,0.15), rgba(7,5,8,0.88) 42%, #070508 70%), url(/images/salon.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(106,42,58,0.38),_transparent_55%)]" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <div className="flex items-center gap-3">
          <CrestMark className="h-10 w-10" />
          <div>
            <p className="font-serif text-[11px] tracking-[0.35em] text-gold uppercase">
              Maison Rose
            </p>
            <p className="font-script text-2xl leading-none text-champagne">The Protocol</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="hidden text-[10px] tracking-[0.28em] text-mist uppercase sm:block">
            Women's Circle · Private Sitting
          </p>
          <button
            type="button"
            onClick={() => begin()}
            className="rounded-full border border-gold/40 px-4 py-2 text-[10px] tracking-[0.22em] text-champagne uppercase transition hover:bg-gold/10"
          >
            Begin
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-6">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-plum/50 px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[10px] tracking-[0.32em] text-gold-soft uppercase">
                Women only · Cybersecurity 101
              </span>
            </div>

            <p className="font-script text-4xl text-gold-soft sm:text-5xl">A salon, not a lecture</p>
            <h1 className="mt-2 font-serif text-5xl leading-[0.92] text-cream sm:text-7xl">
              The Rose
              <br />
              <span className="shimmer italic">Protocol</span>
            </h1>

            <DiamondRule className="my-7 max-w-md" />

            <p className="max-w-xl text-base leading-relaxed text-blush/90 sm:text-lg">
              Twelve sittings in digital self-defense — passwords, phishing, privacy, the ex who
              still has the iCloud, the charming stranger who never FaceTimes. Built for women.
              Styled like an invitation. Useful for the rest of your life.
            </p>

            <form className="mt-8 max-w-lg" onSubmit={begin}>
              <label htmlFor="nom" className="text-[10px] tracking-[0.28em] text-gold uppercase">
                Nom de guerre · optional
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What shall we call you inside?"
                  maxLength={28}
                  className="h-12 flex-1 rounded-full border border-gold/30 bg-ink/70 px-5 text-sm text-cream outline-none ring-gold/40 focus:ring-2"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-full bg-gradient-to-r from-wine to-[#8a3a4c] px-7 text-[11px] tracking-[0.28em] text-champagne uppercase shadow-[0_10px_30px_rgba(106,42,58,0.45)] transition hover:brightness-110"
                >
                  Enter the salon
                </button>
              </div>
              <p className="mt-3 text-xs tracking-wide text-mist">
                12 questions · about 5 minutes · no account, no lecture notes
              </p>
            </form>

            <ul className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
              {[
                { k: "Privacy", v: "Your story stays yours" },
                { k: "Instinct", v: "Spot the script" },
                { k: "Armor", v: "Pretty, practical locks" },
              ].map((item) => (
                <li
                  key={item.k}
                  className="rounded-2xl border border-gold/20 bg-plum/40 px-2 py-3 backdrop-blur-sm"
                >
                  <p className="font-serif text-lg text-gold-soft">{item.k}</p>
                  <p className="mt-1 text-[10px] leading-snug text-mist">{item.v}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-scale-in delay-2">
            <div className="gold-border relative overflow-hidden rounded-[28px] bg-plum/50">
              <CornerFlourishes />
              <div className="grid gap-0 lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="flex min-h-[220px] items-center justify-center px-6 py-8 sm:min-h-[260px]">
                  <RoseKeyMark className="h-44 w-36 text-gold-soft sm:h-52 sm:w-44" />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-[10px] tracking-[0.32em] text-gold uppercase">
                      Table of sittings
                    </p>
                    <h2 className="mt-2 font-serif text-3xl italic text-champagne">
                      Twelve doors, one evening
                    </h2>
                  </div>
                  <ol className="mt-5 columns-2 gap-x-6 text-sm text-blush/90">
                    {questions.map((q) => (
                      <li key={q.id} className="mb-2 flex gap-2 break-inside-avoid">
                        <span className="font-serif text-gold">{q.numeral}.</span>
                        <span>{q.chapter}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 font-serif italic text-mist">
                    “Knowledge is the prettiest armor.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-gold/15 bg-ink/40 py-14">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col items-end justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] tracking-[0.34em] text-gold uppercase">The circle</p>
                <h2 className="mt-2 font-serif text-4xl italic text-champagne sm:text-5xl">
                  Not a type. A table.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                Students, mothers, founders, grandmothers, women who have been burned and women
                who refuse to be. The curriculum is ours. The door is marked women — because so
                many of the threats were written with us in mind.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[10px] tracking-[0.34em] text-gold uppercase">Why a women's salon</p>
          <h2 className="mt-2 max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl">
            The internet was not designed around your safety.
            <span className="italic text-gold-soft"> We design the instincts that were missing.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="gold-border overflow-hidden rounded-[24px] bg-plum/50"
              >
                <div className="h-40 overflow-hidden">
                  <img src={p.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl text-champagne">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blush">{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-5 pb-20 sm:px-8">
          <div className="gold-border relative overflow-hidden rounded-[28px] bg-plum/70 px-6 py-10 text-center sm:px-12">
            <CornerFlourishes />
            <CrestMark className="mx-auto h-14 w-14" />
            <p className="mt-4 font-script text-4xl text-gold-soft">Take your seat</p>
            <p className="mx-auto mt-3 max-w-lg font-serif text-xl leading-relaxed text-blush">
              No score is a scolding. Missed doors become rituals. You will leave with a title,
              three practices, and a sharper no.
            </p>
            <button
              type="button"
              onClick={() => begin()}
              className="mt-8 rounded-full bg-gradient-to-r from-wine to-[#8a3a4c] px-8 py-3 text-[11px] tracking-[0.28em] text-champagne uppercase shadow-[0_10px_30px_rgba(106,42,58,0.45)] transition hover:brightness-110"
            >
              Begin the twelve sittings
            </button>
          </div>
          <p className="mt-8 text-center font-serif italic text-mist">
            The Rose Protocol · A women's cybersecurity salon
          </p>
        </section>
      </main>
    </div>
  );
}
