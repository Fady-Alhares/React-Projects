import contact from "../assets/the-town-bg-02.jpg";

const ContactUs = () => {
  return (
    <div className="flex  pt-[3em] relative  w-full   md:2xl  lg:3xl sm:xs ">
      <div className="flex items-center justify-center w-screen h-screen ">
        <img src={contact} className="bg-cover h-full w-full  " alt="" />
      </div>

      <div className="absolute flex p-[4.5em]">
        <div className="flex-col text-start justify-start items-center pt-[2em]">
          <h1 className="text-5xl px-[1.5em] text-white font-bold mb-3 pt-2">
            Contact Us
          </h1>
          <div className="px-[2em]">
            <div className="w-[90%]  bg-white h-[0.3vh] flex-col items-center justify-center ">
              <div className="w-[30%]  bg-white h-[1.2vh] "></div>
            </div>
          </div>

          <p className="px-[2em] pt-[2em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi
            facere, doloribus fugit inventore error quo doloremque cum esse?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex-col space-y-10  pt-[4.5em] px-[2em] ">
            <p>Phone: +20 1286585449</p>
            <p>Location: Location On Map</p>
          </div>
        </div>

        <div />

        <div className=" absolute right-[10%] top-[70%]">
          <p className="text-xl text-white">Email: fadyalhares@gmail.com</p>

          <fieldset className="fieldset w-xs join p-4 rounded-box">
            <input
              type="text"
              className="input join-item bg-white rounded-3xl "
              placeholder="Subscribe Your Mail"
            />
            <button className="bg-white text-black-900 p-3.5 text-[1em] rounded-2xl hover:bg-blue-400 duration-150 cursor-pointer">
              SUBMIT
            </button>
          </fieldset>
        </div>
      </div>
      <div className=" h-screen">
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white p-4">
          Copyright © 2025 Company Name - Design:{" "}
          <span href="#" className="text-blue-500 hover:underline">
            Fady Wagih
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
