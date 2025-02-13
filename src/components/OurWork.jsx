const OurWork = () => {
  return (
    <div className=" flex-col text-center  pt-[2.5em] space-y-4  md:2xl  lg:3xl sm:xs ">
      <h1 className="text-4xl text-blue-500 ">Our Work</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
        Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
      </p>
      <div className="flex justify-center items-center w-full  space-x-6 px-[4em] pt-[2em] ">
        <img
          src="/public/images/gallery-tn-01.jpg"
          className=" hover:translate-y-2 duration-150 cursor-pointer "
          alt=""
        />
        <img
          src="/public/images/gallery-tn-02.jpg"
          className=" hover:translate-y-2 duration-150  cursor-pointer"
          alt=""
        />
        <img
          src="/public/images/gallery-tn-03.jpg"
          className=" hover:translate-y-2 duration-150  cursor-pointer"
          alt=""
        />
        <img
          src="/public/images/gallery-tn-04.jpg"
          className=" hover:translate-y-2 duration-150 cursor-pointer "
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/public/images/gallery-tn-05.jpg"
          className=" hover:translate-y-2 duration-150  cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurWork;
