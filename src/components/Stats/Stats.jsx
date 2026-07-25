const Stats = () => {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-8 md:grid-cols-4">

        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-500">200+</h3>
          <p className="mt-3 text-zinc-400">Performances</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-500">50+</h3>
          <p className="mt-3 text-zinc-400">Artists</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-500">10+</h3>
          <p className="mt-3 text-zinc-400">Countries</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-bold text-red-500">100K+</h3>
          <p className="mt-3 text-zinc-400">Audience Reached</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;