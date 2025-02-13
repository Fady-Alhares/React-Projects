import photo1 from "../assets/gallery-tn-01.jpg";
import photo2 from "../assets/gallery-tn-02.jpg";
import photo3 from "../assets/gallery-tn-03.jpg";
import photo4 from "../assets/gallery-tn-04.jpg";
import photo5 from "../assets/gallery-tn-05.jpg";

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
          className=" hover:translate-y-2 duration-150 cursor-pointer bg-cover h-full w-full  "
          alt=""
        />
        <img
          src={photo2}
          className=" hover:translate-y-2 duration-150  cursor-pointer bg-cover h-full w-full "
          alt=""
        />
        <img
          src={photo3}
          className=" hover:translate-y-2 duration-150  cursor-pointer bg-cover h-full w-full "
          alt=""
        />
        <img
          src={photo4}
          className=" hover:translate-y-2 duration-150 cursor-pointer bg-cover h-full w-full  "
          alt=""
        />
      </div>
      <div className="flex justify-center items-center  h-screen w-sreen">
        <img
          src={photo5}
          className=" hover:translate-y-2 duration-150  cursor-pointer bg-cover    h-[70vh]    "
          alt=""
        />
      </div>
    </div>
  );
};

export default OurWork;
