const photo1 = "/src/assets/gallery-tn-01.jpg";
const photo2 = "/src/assets/gallery-tn-02.jpg";
const photo3 = "/src/assets/gallery-tn-03.jpg";
const photo4 = "/src/assets/gallery-tn-04.jpg";
const photo5 = "/src/assets/gallery-tn-05.jpg";
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
          src={photo1}
          className=" hover:translate-y-2 duration-150 cursor-pointer "
          alt=""
        />
        <img
          src={photo2}
          className=" hover:translate-y-2 duration-150  cursor-pointer"
          alt=""
        />
        <img
          src={photo3}
          className=" hover:translate-y-2 duration-150  cursor-pointer"
          alt=""
        />
        <img
          src={photo4}
          className=" hover:translate-y-2 duration-150 cursor-pointer "
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={photo5}
          className=" hover:translate-y-2 duration-150  cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurWork;
