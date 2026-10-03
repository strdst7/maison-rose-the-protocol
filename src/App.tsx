import { useState } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import SiteFooter from "./components/SiteFooter";
import { questions } from "./data/quiz";
import type { AnswerRecord } from "./types";

type Screen = "landing" | "quiz" | "results";

export default function App() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  return (
    <>
      {screen === "landing" && (
        <Landing
          onBegin={(value) => {
            setName(value);
            setAnswers([]);
            setScreen("quiz");
          }}
        />
      )}
      {screen === "quiz" && (
        <Quiz
          name={name}
          questions={questions}
          onComplete={(next) => {
            setAnswers(next);
            setScreen("results");
          }}
        />
      )}
      {screen === "results" && (
        <Results
          name={name}
          answers={answers}
          onRetake={() => {
            setAnswers([]);
            setScreen("quiz");
          }}
          onHome={() => {
            setAnswers([]);
            setScreen("landing");
          }}
        />
      )}
      <SiteFooter />
    </>
  );
}
