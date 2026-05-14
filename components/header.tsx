const Header = () => {
  return (
    <header className="flex flex-row items-center justify-center align-center w-full py-5 sm:py-10 font-[playfair]">
      <h1 className="flex flex-col align-center content-center justify-center text-center text-4xl md:text-5xl font-bold">
        <span className="text-xl md:text-2xl -mb-1">The</span>
        <span className="text-blue-300 text-5xl md:text-6xl">Butterfly</span>
        <span>Insights</span>
      </h1>
    </header>
  );
};

export default Header;
