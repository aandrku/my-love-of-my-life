import { motion } from 'motion/react';
import { ReasonsCarousel } from '@/components/carousels/ReasonsCarousel';
import { useNavigate } from 'react-router';

const reasons = [
  "You're cute",
  "You're beatiful",
  "You're kind",
  'You like my mom',
  'You care about me',
];
const reasons2 = [
  "You're funny",
  "You're my bubka",
  'You have betiful voice',
  "You're funny when you talk in your dreams",
  'You are smart',
  'You are my bro',
];

function WhyYouReAwesomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-bg2 text-text1 flex flex-col items-center gap-8"
    >
      <Header></Header>
      <ReasonsCarousel reasons={reasons}></ReasonsCarousel>
      <ReasonsCarousel reasons={reasons2}></ReasonsCarousel>
      <Footer></Footer>
    </motion.div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-center gap-2 text-3xl">
      <div className="text-accent-text1 rotate-2 text-5xl">First of all,</div>
      <div className="-rotate-2 text-center">
        Let me tell you a few reasons why you're an{' '}
        <span className="text-accent-text2">awesome </span>
        girlfriend
      </div>
    </div>
  );
}

function Footer() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/gift-instructions');
  };

  return (
    <div className="absolute bottom-4 flex flex-col gap-8 text-center text-2xl">
      <div className="text-text2">
        <div className="rotate-2">I've also prepared something for you</div>
        <div className="-rotate-1">Do you want to know where is that?</div>
      </div>
      <motion.div
        onClick={clickHandler}
        whileTap={{ rotate: -8, scale: 1.1 }}
        className="bg-accent-ui1 border-accent-border2 -rotate-6 rounded-2xl border p-4 text-3xl select-none"
      >
        Yes
      </motion.div>
    </div>
  );
}

export default WhyYouReAwesomePage;
