import { useNavigate } from 'react-router';
import heartsSvg from '@/assets/hearts.svg';
import { motion } from 'motion/react';

function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-bg2 text-text1 flex h-screen w-screen flex-col items-center gap-4 pt-4"
    >
      <img src={heartsSvg} />
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </motion.div>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="rotate-4 text-center text-4xl font-bold">Hooray!</h1>
      <h1 className="text-accent-text1 -rotate-1 text-center text-3xl font-bold">
        Today is our <span className="text-accent-text2">1-year</span>{' '}
        anniversary.
      </h1>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col gap-4 text-center text-2xl">
      <p className="rotate-2">
        This is why I made you this website. It's my handmade gift for you!
      </p>
      <p className="text-accent-text1 rotate-2 text-3xl">Please take a look</p>
    </div>
  );
}

function Footer() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/why');
  };

  return (
    <div className="h absolute bottom-6 flex w-full flex-col items-center justify-center gap-4">
      <motion.div
        onClick={clickHandler}
        className="bg-accent-ui1 border-accent-border2 -rotate-6 rounded-2xl border p-4 text-3xl select-none"
        whileTap={{ rotate: -8, scale: 1.1 }}
      >
        Take a look
      </motion.div>
      <p className="text-solid2">^ You should definitely click this button ^</p>
    </div>
  );
}

export default LandingPage;
