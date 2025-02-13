import intro from "../assets/the-town-01.jpg";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center pt-[1.7em] gap-[2.5em] px-[2em] w-full">
      <img
        src={intro}
        alt="Town"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg"
      />

      <div className="text-center md:text-left">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-blue-600 pb-[0.5em]">
          Introduction
        </h1>

        <p className="pb-[1em]">
          The Town is <span className="font-bold">simple CSS template</span>{" "}
          built on HTML CSS and this is a little parallax layout that you can
          use for your website.
        </p>

        <p className="pb-[1em]">
          Please tell your friends about our site{" "}
          <span className="text-blue-800">YourSite</span>. Thank you. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi
          tenetur.
        </p>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 duration-150 hover:cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Introduction;
