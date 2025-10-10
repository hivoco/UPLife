const Navbar = ({ animation }) => {
  const menuItems = ["Home", "Our Products", "About us", "Blogs", "Contact us"];

  return (
    <nav
      className={`flex justify-between gap-6 bg-transparent items-start
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
  );
};

export default Navbar;
