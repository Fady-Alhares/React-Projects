const Header = () => {
  return (
    <div className="flex justify-center items-center  md:2xl  lg:3xl sm:xs  ">
      {/*  */}

      {/*  */}
      <div className="  absolute pt-[3.5em] flex flex-wrap   space-x-[15em]  text-[1.3em] text-white  font-bold font-[cursive]">
        <div className="pe-[3em]">
          <a href="">Online</a>
        </div>

        <div className="flex-row gap-[3em] space-x-[2em] px-[3em] ">
          <a href="" className="text-blue-600">
            Introduction (current)
          </a>
          <a href="">Our Work</a>

          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
