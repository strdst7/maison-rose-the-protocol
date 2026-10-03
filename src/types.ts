export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  numeral: string;
  chapter: string;
  whisper: string;
  prompt: string;
  options: Option[];
  correctId: string;
  insight: string;
  ritual: string;
};

export type Rank = {
  min: number;
  max: number;
  title: string;
  epithet: string;
  image: string;
  letter: string;
};

export type AnswerRecord = {
  questionId: string;
  selectedId: string;
  correct: boolean;
};
