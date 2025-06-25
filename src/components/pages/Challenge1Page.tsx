import {
  DraggableCardBody,
  DraggableCardContainer,
} from '@/components/draggable-card/DraggableCard';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

const picSrc = '/challenge1/';

const items = [
  {
    title: 'amogus',
    image: picSrc + 'amogus.jpg',
    className: 'absolute top-10 left-[20%] rotate-[-5deg]',
  },
  {
    title: 'forest gamer',
    image: picSrc + 'half-heart.jpg',
    className: 'absolute top-40 left-[25%] rotate-[-7deg]',
  },
  {
    title: 'mirror',
    image: picSrc + 'couple.jpg',
    className: 'absolute top-5 left-[40%] rotate-[8deg]',
  },
  {
    title: 'lego',
    image: picSrc + 'lego.jpg',
    className: 'absolute top-32 left-[55%] rotate-[10deg]',
  },
  {
    title: 'middle fingers',
    image: picSrc + 'fucks.jpg',
    className: 'absolute top-20 right-[35%] rotate-[2deg]',
  },
  {
    title: 'legs',
    image: picSrc + 'legs.jpg',
    className: 'absolute top-24 left-[45%] rotate-[-7deg]',
  },
  {
    title: 'dino',
    image: picSrc + 'dino.jpg',
    className: 'absolute top-8 left-[30%] rotate-[4deg]',
  },
  {
    title: 'sushi',
    image: picSrc + 'sushi.jpg',
    className: 'absolute top-8 left-[10%] rotate-[2deg]',
  },
  {
    title: 'kolbaska',
    image: picSrc + 'kolbaska.jpg',
    className: 'absolute top-25 left-[20%] rotate-[15deg]',
  },
  {
    title: 'trusi',
    image: picSrc + 'trusi.jpg',
    className: 'absolute top-25 left-[1%] rotate-[7deg]',
  },
  {
    title: 'Tahoe',
    image: picSrc + 'tahoe.jpg',
    className: 'absolute top-5 left-[35%] rotate-[7deg]',
  },
  {
    title: 'shower heads',
    image: picSrc + 'showers.jpg',
    className: 'absolute top-5 left-[35%] rotate-[7deg]',
  },
  {
    title: 'you know what this is',
    image: picSrc + 'marriage.jpg',
    className: 'absolute top-5 left-[35%] rotate-[3deg]',
  },
];

export function Memories() {
  return (
    <DraggableCardContainer className="relative flex min-h-[60vh] w-full items-center justify-center overflow-clip">
      <p className="text-border1 top-1/2 mx-auto max-w-sm translate-x-20 -translate-y-3/4 text-center text-2xl">
        6
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 object-cover"
          />
          <h3 className="text-text2 mt-4 text-center text-2xl font-bold">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <motion.div
        onClick={() => {
          navigate('/challenge2');
        }}
        className="bg-accent-ui1 border-accent-border2 -rotate-6 rounded-2xl border p-4 text-3xl select-none"
        whileTap={{ rotate: -8, scale: 1.1 }}
      >
        Next Challenge
      </motion.div>
    </div>
  );
}

export function Challenge1Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-text1 flex flex-col items-center gap-4 text-2xl"
    >
      <div className="text-accent-text1 text-3xl">Challenge 1</div>
      <div>Find the first clue among our memories</div>
      <Memories></Memories>
      <Footer></Footer>
    </motion.div>
  );
}
