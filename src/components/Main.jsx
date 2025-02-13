const Main = () => {
  return (
    <div className="w-full  flex-col md:2xl  lg:3xl sm:xs ">
      <div className="h-screen flex items-center justify-center">
        <img
          src="/images/the-town-bg-01.jpg"
          alt=""
          className=" w-full h-full bg-cover"
        />
      </div>

      <div className="   absolute top-[40%] left-[40%] text-center font-bold text-white ">
        <div className="font-[50px] mb-[1em]">
          <h1 className="text-5xl">The Town</h1>
        </div>
        <div>
          <p>
            WebSite TailwindCSS
            <div className="mt-[1em]">
              <span className="block">
                by <span className="text-blue-600">Fady-Wagih</span>
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
