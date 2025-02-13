import photo1 from "../assets/gallery-tn-01.jpg";
import photo2 from "../assets/gallery-tn-02.jpg";
import photo3 from "../assets/gallery-tn-03.jpg";
import photo4 from "../assets/gallery-tn-04.jpg";
import photo5 from "../assets/gallery-tn-05.jpg";

const OurWork = () => {
  return (
    <div className="flex flex-col text-center pt-10 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500">Our Work</h1>
      <p className="mt-4 text-lg text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br />
        Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4">
        {[photo1, photo2, photo3, photo4].map((photo, index) => (
          <img
            key={index}
            src={photo}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer object-cover aspect-square"
            alt={`Gallery ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <img
          src={photo5}
          className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer object-cover w-full max-w-lg h-auto"
          alt="Gallery Highlight"
        />
      </div>
    </div>
  );
};

export default OurWork;
