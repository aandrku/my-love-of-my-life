import { motion } from 'motion/react';
import { ReasonsCarousel } from '../carousels/ReasonsCarousel';

const reasons = ["You're cute", "You're beatiful", "You're kind"];

function WhyYouReAwesomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg2 text-text1 text-3xl"
    >
      {' '}
      17 reasons why you're awesome
      <ReasonsCarousel reasons={reasons}></ReasonsCarousel>
      <div>I've also prepared something for you</div>
      <div>Do you want to know what is that?</div>
      <div>Yes</div>
    </motion.div>
  );
}

export default WhyYouReAwesomePage;
