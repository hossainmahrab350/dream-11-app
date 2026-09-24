
const Footer = () => {
  return (
    <footer className="bg-[#03091f] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              About Us
            </h3>

            <p className="text-gray-300">
              We are a passionate team dedicated to providing
              the best services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Subscribe
            </h3>

            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-black"
              />

              <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4">
        ©2026 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;