function Footer() {
  return (
    <footer className="w-full bg-purple-600 bottom-0">
      <div className="flex flex-wrap text-center text-white">
        <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
          <div className="my-6 ml-3 text-xl font-semibold text-gray-300">
            ABOUT US
          </div>
          <p className="p-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras
            sodales id ipsum at convallis.
          </p>
          <p className="p-3 text-gray-400">
            Morbi tristique massa nec massa auctor, at scelerisque felis
            consectetur. Morbi tempus et odio sit amet feugiat. Maecenas
            dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.
          </p>
        </div>

        <div className="w-full md:w-1/3 p-5">
          <div className="mt-6 text-xl font-semibold text-gray-300">
            SAY HELLO!
          </div>
          <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
            <div className="flex items-center mb-4 text-gray-600">
              <input
                className="rounded w-full h-10 p-2 border-b text-sm outline-none bg-gray-200"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center mb-4 text-gray-600">
              <input
                className="rounded w-full h-10 p-2 border-b text-sm outline-none bg-gray-200"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6 text-gray-600">
              <textarea
                className="w-full h-24 px-2 pt-2 border-b-2 text-sm outline-none rounded bg-gray-200"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="mx-auto py-2 px-4 rounded-full bg-transparent hover:bg-yellow-800 border-2 border-gray-300 text-gray-300 font-bold tracking-wider "
                type="button"
              >
                SEND
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
          <div className="my-6 text-xl font-semibold text-gray-300">
            CONTACT US
          </div>
          <p className="mt-8 text-gray-400">
            A108 Aviatorilor Street <br />
            Bucharest <br />
            Romania <br />
            <strong>Phone:</strong> +40 773 837 261 <br />
            <strong>Email:</strong> matei.g.florentina@gmail.com
          </p>
          <div className="relative w-20 h-20 mx-auto my-12 bg-purple-300 transform -rotate-45">
            <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-yellow-800 cursor-pointer">
              <i className="fab fa-facebook-f fa-lg text-purple-500 transform rotate-45"></i>
            </div>
            <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-yellow-800 cursor-pointer">
              <i className="fab fa-twitter fa-lg text-purple-500 transform rotate-45"></i>
            </div>
            <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-yellow-800 cursor-pointer">
              <i className="fab fa-google-plus-g fa-lg text-purple-500 transform rotate-45"></i>
            </div>
            <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-yellow-800 cursor-pointer">
              <i className="fab fa-linkedin-in fa-lg text-purple-500 transform rotate-45"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
