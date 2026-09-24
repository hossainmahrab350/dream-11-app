import bannerImg from "../assets/bg-shadow.png";


import cricketLogo from "../assets/banner-main.png";

const Banner = () => {
  return (
    <section className="mx-auto my-8 w-11/12">
      <div
        className="relative flex min-h-100 items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-purple-950/80"></div>

        <div className="relative z-10 flex flex-col items-center text-center">

          <img
            src={cricketLogo}
            alt="Cricket Logo"
            className="mb-5 h-28 w-auto"
          />

          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="mt-3 text-lg font-medium text-white">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="mt-6 rounded-lg border-2 border-black bg-lime-400 px-7 py-3 font-bold text-black shadow-[0_0_0_3px_#a3e635] hover:bg-lime-300">
            Claim Free Credit
          </button>

        </div>
      </div>
    </section>
  );
};

export default Banner;
