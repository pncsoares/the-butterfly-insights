interface WalkthroughProps {
  walkthrough: string;
}

const Walkthrough = ({ walkthrough }: WalkthroughProps) => {
  return <span className="text-xl font-light text-center">{walkthrough}</span>;
};

export default Walkthrough;
