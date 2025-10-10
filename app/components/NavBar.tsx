// const Navbar = ({ animation }: { animation: boolean }) => {
//   const menuItems = ["Home", "Our Products", "About us", "Blogs", "Contact us"];

//   return (
//     <nav
//       className={`flex justify-between gap-6 bg-transparent items-start
//       transition-transform duration-1000 ease-out
//       ${animation ? "" : "-translate-y-[100%] opacity-0"}
//     `}
//     >
//       {menuItems.map((item) => (
//         <button
//           key={item}
//           className="
//           whitespace-nowrap
//           text-center
//             px-4 py-2
//             rounded-full
//             text-base/5
//             font-normal
//             outline outline-white
//             bg-black/50
//             text-white
//             backdrop-blur-[10px]
//             hover:bg-black/30
//             transition
//             duration-300
//             ease-in-out
//             cursor-pointer
//           "
//         >
//           {item}
//         </button>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";

const Navbar = ({ animation }: { animation: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Our Products", "About us", "Blogs", "Contact us"];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex justify-between gap-6 bg-transparent items-start
        transition-transform duration-1000 ease-out
        ${animation ? "" : "-translate-y-[100%] opacity-0"}
      `}
      >
        {menuItems.map((item) => (
          <button
            key={item}
            className="
            whitespace-nowrap
            text-center
            px-4 py-2
            rounded-full
            text-base/5
            font-normal
            outline outline-white
            bg-black/50
            text-white
            backdrop-blur-[10px]
            hover:bg-black/30
            transition
            duration-300
            ease-in-out
            cursor-pointer
          "
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            p-3
            rounded-[4px]
            outline-1 outline-white
            bg-[#2D2D2D]/25
            text-white
            backdrop-blur-[10px]
            hover:bg-[#2D2D2D]/50
            transition-all
            duration-300
            ease-in-out
            ${animation ? "" : "-translate-y-[100%] opacity-0"}
          `}
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <div className="w-6 h-6  flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            absolute top-16 left-0 right-0
            flex flex-col gap-3
            p-4
            transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          {menuItems.map((item) => (
            <button
              key={item}
              className="
                w-full
                text-center
                px-4 py-3
                rounded-full
                text-base
                font-normal
                outline outline-white
                bg-black/50
                text-white
                backdrop-blur-[10px]
                hover:bg-black/30
                transition
                duration-300
                ease-in-out
                cursor-pointer
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;