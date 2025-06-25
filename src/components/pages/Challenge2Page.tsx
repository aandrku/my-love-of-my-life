import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

const questions = [
  {
    question: 'Is the sky blue?',
    answer: 'yes',
    options: ['yes', 'no', 'maybe'],
  },
  {
    question: 'Do cats bark?',
    answer: 'no',
    options: ['yes', 'no', 'maybe'],
  },
  {
    question: 'Is JavaScript fun?',
    answer: 'yes',
    options: ['yes', 'no', 'maybe'],
  },
];

export default function Challenge2Page() {
  const [current, setCurrent] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const navigate = useNavigate();

  const handleAnswer = (userAnswer: string) => {
    if (userAnswer === questions[current].answer) {
      if (current + 1 === questions.length) {
        setQuizComplete(true);
      } else {
        setCurrent(current + 1);
      }
    } else {
      setWrongAnswer(true);
    }
  };

  if (wrongAnswer) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-text1 p-8 pt-20 text-2xl"
      >
        <div className="bg-bg1 border-accent-border3 flex flex-col items-center gap-4 rounded-2xl border p-8">
          <div className="text-accent-text2 text-4xl">Wrong!</div>
          <motion.div
            onClick={() => {
              setWrongAnswer(false);
            }}
            className="bg-accent-ui1 border-accent-border2 w-2/3 -rotate-6 rounded-2xl border p-4 text-2xl select-none"
            whileTap={{ rotate: -8, scale: 1.1 }}
          >
            Try again
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (quizComplete) {
    return (
      <motion.div className="flex h-screen flex-col items-center gap-20 p-4 pt-20">
        <div className="text-text1 bg-bg1 border-border3 rounded-2xl border p-6 text-center text-4xl">
          <h1 className="font-bold">You did it!</h1>
          <h2>
            The second clue is <span className="text-accent-text2">2</span>
          </h2>
        </div>

        <motion.div
          onClick={() => {
            navigate('/challenge3');
          }}
          className="bg-accent-ui1 text-accent-text1 border-accent-border2 w-2/3 -rotate-6 rounded-2xl border p-4 text-3xl select-none"
          whileTap={{ rotate: -8, scale: 1.1 }}
        >
          Next Challenge
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={questions[current].question}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-text1 flex flex-col gap-6 p-6 text-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-accent-text1 text-3xl">Here is a quick quiz.</div>
        <div className="text-2xl">
          Answer all the questions correctly to recover the second clue.
        </div>
      </div>
      <div className="bg-bg1 border-border3 rounded-2xl border p-6">
        <h2 className="mb-4 text-left text-2xl">
          {questions[current].question}
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          {questions[current].options.map((option) => {
            return (
              <motion.div
                onClick={() => handleAnswer(option)}
                className="text-accent-text1 bg-accent-ui1 w-4/5 rounded-xl px-4 py-2 text-3xl"
                whileTap={{ scale: 1.1 }}
              >
                {option}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
