import { motion } from 'motion/react';
import lotsOfHearts from '@/assets/lots-of-hears.svg';
import coolHeart from '@/assets/cool-heart.svg';

export function FinalMessagePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-text1 flex flex-col items-center gap-4 p-8 text-center"
    >
      <img src={lotsOfHearts} />
      <div className="text-4xl">
        You're the <span className="text-accent-text2">best</span> thing that
        ever happened to me!'
      </div>
      <div className="text-accent-text1 text-5xl">Lots of hearts for you</div>
      <img src={coolHeart} className="size-32" />
    </motion.div>
  );
}
