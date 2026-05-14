interface InsightProps {
  insight: string;
}

const Insight = ({ insight }: InsightProps) => {
  return (
    <div className="flex flex-col items-center justify-center align-center w-full font-[playfair]">
      <span className="text-3xl font-bold text-center">{insight}</span>
    </div>
  );
};

export default Insight;
