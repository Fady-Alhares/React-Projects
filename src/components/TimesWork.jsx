const TimesWork = () => {
  return (
    <section className="bg-gradient-to-b from-[#e3987f] to-[#5c648c] py-10 px-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["First Work", "Second Work", "Third Work"].map((title, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 bg-white p-6 rounded-lg shadow-lg"
          >
            <h1 className="font-bold text-3xl text-gray-800">{title}</h1>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 duration-150 font-mono text-xl"
            >
              Click To Show
            </a>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores labore corrupti autem reiciendis! Asperiores, mollitia.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimesWork;
