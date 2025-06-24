import { useState } from 'react';

const questions = [
  {
    question: 'Is the sky blue?',
    answer: 'yes',
  },
  {
    question: 'Do cats bark?',
    answer: 'no',
  },
  {
    question: 'Is JavaScript fun?',
    answer: 'yes',
  },
];

export default function Challenge3Page() {
  const [current, setCurrent] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (userAnswer: string) => {
    if (userAnswer === questions[current].answer) {
      if (current + 1 === questions.length) {
        setQuizComplete(true);
      } else {
        setCurrent(current + 1);
      }
    } else {
      alert('Wrong answer! Try again.');
    }
  };

  if (quizComplete) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">🎉 Quiz Complete!</h1>
        <p>You answered all questions correctly.</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h2 className="mb-4 text-xl">{questions[current].question}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleAnswer('yes')}
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer('no')}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          No
        </button>
      </div>
    </div>
  );
}
