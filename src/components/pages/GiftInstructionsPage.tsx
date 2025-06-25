import { useState } from 'react';
import { motion } from 'motion/react';
import threeHearts from '@/assets/three-hearts.svg';
import luvU from '@/assets/luv-u.svg';
import face from '@/assets/face.svg';
import { useNavigate } from 'react-router';

const place = "in your mom's room ";

export function GiftInstructionsPage() {
  const [giftFound, setGiftFound] = useState(false);
  const [giftUnwrapped, setGiftUnwrapped] = useState(false);

  const navigate = useNavigate();

  const giftFoundHandler = () => {
    setGiftFound(true);
  };

  const giftUnwrappedHandler = () => {
    setGiftUnwrapped(true);
  };

  if (!giftFound) {
    return (
      <motion.div
        key={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-text1 flex h-screen flex-col items-center justify-start gap-8 pt-10 text-2xl"
      >
        <div className="bg-bg1 border-accent-border3 relative rounded-xl border p-6 pb-8">
          <div className="text-3xl">Your gift is {place}</div>
          <div className="text-text2">Did you find it?</div>

          <motion.div
            onClick={giftFoundHandler}
            className="bg-accent-ui1 border-accent-border2 absolute right-3 bottom-3 w-11 -rotate-6 rounded-xl border p-1 text-center text-xl select-none"
            whileTap={{ rotate: -8, scale: 1.1 }}
          >
            Yes
          </motion.div>
        </div>
        <img src={threeHearts} />
      </motion.div>
    );
  }

  if (!giftUnwrapped) {
    return (
      <motion.div
        key={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-text1 flex h-screen flex-col items-center justify-start gap-8 pt-10 text-2xl"
      >
        <div className="bg-bg1 border-accent-border3 relative rounded-xl border p-6 pb-8">
          <div className="text-3xl">You kinda have to unwrap it</div>
          <div className="text-text2">Did you do that?</div>

          <motion.div
            onClick={giftUnwrappedHandler}
            className="bg-accent-ui1 border-accent-border2 absolute right-3 bottom-3 w-11 -rotate-6 rounded-xl border p-1 text-center text-xl select-none"
            whileTap={{ rotate: -8, scale: 1.1 }}
          >
            Yes
          </motion.div>
        </div>
        <img src={luvU} />
      </motion.div>
    );
  }

  return (
    <motion.div
      key={3}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-text1 flex h-screen flex-col items-center justify-start gap-8 p-2 pt-10 text-2xl"
    >
      <div className="bg-bg1 border-accent-border3 relative rounded-xl border p-6 pb-8">
        <div className="text-3xl">
          Your gift is locked. You have to complete some challenges to get it
        </div>
        <div className="text-text2">Are you ready?</div>

        <motion.div
          onClick={() => {
            navigate('/challenge1');
          }}
          className="bg-accent-ui1 border-accent-border2 absolute right-3 bottom-3 w-11 -rotate-6 rounded-xl border p-1 text-center text-xl select-none"
          whileTap={{ rotate: -8, scale: 1.1 }}
        >
          Yes
        </motion.div>
      </div>
      <img src={face} />
    </motion.div>
  );
}
