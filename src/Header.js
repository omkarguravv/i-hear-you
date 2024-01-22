import { Link } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link as SmoothScroll } from "react-scroll";
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className=" pb-10   h-16 text-center">
      <div className="flex justify-between items-center mt-3">
        <Link className="flex justify-center items-center" to="/">
          <h1 className="text-2xl md:text-5xl font-bold md:font-semibold ">
            I Hear You
          </h1>
        </Link>

        {/* Mobile Sidebar Toggle Button */}

        <p aria-label="toggle" className="md:hidden text-2xl flex gap-10">
          <FaBars onClick={toggleSidebar} />
        </p>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 bg-white/100 z-20">
            <div className="flex justify-end p-4">
              <p
                aria-label="toggle-back"
                onClick={toggleSidebar}
                className="text-2xl mt-2"
              >
                <ImCross />
              </p>
            </div>
            <div className="flex flex-col items-center text-2xl gap-y-10 mt-20">
              <h2>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </h2>
              <h2>
                <Link to="/" onClick={handleLinkClick}>
                  Tutorial
                </Link>
              </h2>

              <h2 className="flex justify-center items-center  gap-2">
                <Link
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-black shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center text-white"
                  to="/sign"
                  onClick={handleLinkClick}
                >
                  Sign detection
                </Link>
              </h2>
              <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>
            <SmoothScroll to="About" smooth duration={500}>
              About US
            </SmoothScroll>
          </h2>
          <h2>
            <SmoothScroll to="About" smooth duration={500}>
              Learn
            </SmoothScroll>
          </h2>
          <h2>
            <SmoothScroll to="Contact" smooth duration={500}>
              Contact
            </SmoothScroll>{" "}
          </h2>
          <h2>
            <Link
              className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-black shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center text-white"
              to="/sign"
            >
              Sign detection
              <MdArrowOutward />
            </Link>
          </h2>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-2xl justify-center items-center">
          <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>
            <SmoothScroll to="About" smooth duration={500}>
              About US
            </SmoothScroll>
          </h2>
          <h2>
            <SmoothScroll to="About" smooth duration={500}>
              Learn
            </SmoothScroll>
          </h2>
          <h2>
            <SmoothScroll to="Contact" smooth duration={500}>
              Contact
            </SmoothScroll>{" "}
          </h2>
          <h2>
            <Link
              className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-black shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center text-white"
              to="/sign"
            >
              Sign detection
              <MdArrowOutward />
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
