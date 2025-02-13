const Introduction = () => {
  return (
    <div className="flex items-center  md:2xl  lg:3xl sm:xs   pt-[1.7em] gap-[2.5em] px-[2em] w-full ">
      <img
        src="/public/images/the-town-01.jpg"
        width="50%"
        alt="Town"
        className="mb-[2em]
      "
      />
      <div>
        <div className="font-bold text-5xl text-blue-600 pb-[0.5em]">
          <h1>Introduction</h1>
        </div>
        <div className="pb-[1em]">
          <p>
            The Town is <p className="font-bold inline">simple CSS template</p>{" "}
            built on HTML CSS and this is a little parallax layout that you can
            use for your website
          </p>
        </div>
        <div className="pb-[1em] ">
          <p>
            please tell your friends about our site{" "}
            <span className="text-blue-800 ">YourSite</span> . Thank you. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Itaque, nisi
            tenetur.
          </p>
        </div>
        <div>
          <button className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 duration-150 hover:cursor-pointer ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
