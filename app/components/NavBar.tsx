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
    <nav
      className={`
        transition-transform duration-1000 ease-out
        ${animation ? "" : "-translate-y-[100%] opacity-0"}
      `}
    >
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="
          md:hidden
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
        "
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`
          flex
          md:flex-row md:justify-between md:gap-6 md:items-start md:mt-0
          md:opacity-100 md:translate-y-0 md:pointer-events-auto md:static
          flex-col gap-3 p-4 mt-4
          absolute top-20  md:top-16 left-0 right-0
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0 z-10  "
              : "md:opacity-100 md:translate-y-0 opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        {menuItems.map((item) => (
          <button
            key={item}
            className="
              md:w-auto w-full
              whitespace-nowrap
              text-center
              px-4
              md:py-2 py-3
              rounded-full
              md:text-base/5 text-base
              font-normal
              outline outline-white
              bg-black/50
              text-white
              backdrop-blur-[2px]
              md:backdrop-blur-[10px]
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
    </nav>
  );
};

export default Navbar;
