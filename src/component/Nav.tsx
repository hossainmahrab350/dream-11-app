
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Cricket Logo"
              className="w-20 h-auto"
            />
          </div>

          {/* Navigation */}
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-lg text-gray-700 font-medium
                hover:bg-red-50 hover:text-red-600 transition duration-200"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-lg text-gray-700 font-medium
                hover:bg-red-50 hover:text-red-600 transition duration-200"
              >
                Fixture
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-lg text-gray-700 font-medium
                hover:bg-red-50 hover:text-red-600 transition duration-200"
              >
                Players
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-lg text-gray-700 font-medium
                hover:bg-red-50 hover:text-red-600 transition duration-200"
              >
                Schedule
              </a>
            </li>

            {/* CTA button */}
            <li>
              <a
                href="#"
                className="ml-3 px-5 py-2.5 rounded-lg bg-red-600
                text-white font-semibold hover:bg-red-700
                transition duration-200 shadow-sm"
              >
                Get Started
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;