import contact from "../assets/the-town-bg-02.jpg";

const ContactUs = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={contact}
          className="w-full h-full object-cover"
          alt="Contact Us"
        />
      </div>

      <div className="relative z-10 flex flex-col text-center md:text-left px-6 md:px-16 py-10 w-full md:w-2/3">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
          Contact Us
        </h1>

        <div className="w-[90%]  bg-white h-[0.3vh] flex-col items-center justify-center ">
          <div className="w-[30%]  bg-white h-[1.2vh] "></div>
        </div>

        <p className="mt-6 text-white text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi
          facere, doloribus fugit inventore error quo doloremque cum esse?
        </p>

        <div className="mt-8 space-y-4 text-white">
          <p> Phone: +20 1286585449</p>
          <p> Location: Location On Map</p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-end w-full md:w-1/3 px-6 py-10">
        <p className="text-xl text-white mb-4">Email: fadyalhares@gmail.com</p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 bg-white p-2 rounded-3xl">
          <input
            type="text"
            className="w-full sm:w-auto px-4 py-2 rounded-3xl focus:outline-none"
            placeholder="Subscribe Your Mail"
          />
          <button className="bg-blue-500 text-white px-5 py-2 rounded-2xl hover:bg-blue-600 duration-150">
            SUBMIT
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white p-4 w-full">
        <p>
          Copyright © 2025 Company Name - Design:{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Fady Wagih
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
