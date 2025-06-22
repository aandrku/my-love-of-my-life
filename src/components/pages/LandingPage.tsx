import heartsSvg from '../../assets/hearts.svg';

function LandingPage() {
  return (
    <div className="bg-bg2 text-text1 flex h-screen w-screen flex-col items-center gap-4 pt-4">
      <img src={heartsSvg} />
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
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
  return (
    <div className="h absolute bottom-6 flex w-full flex-col items-center justify-center gap-4">
      <button className="bg-accent-ui1 border-accent-border2 -rotate-6 rounded-2xl border p-4 text-3xl">
        Take a look
      </button>
      <p className="text-solid2">^ You should definitely click this button ^</p>
    </div>
  );
}

export default LandingPage;
