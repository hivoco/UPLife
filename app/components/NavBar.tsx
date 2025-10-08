const Navbar = () => {
  const menuItems = ["Home", "Our Products", "About us", "Blogs", "Contact us"];

  return (
    <nav className="w-fit flex justify-center gap-6 bg-transparent items-start">
      {menuItems.map((item) => (
        <button
          key={item}
          className="
            min-w-[140px]
            px-4 py-2
            rounded-full
            text-base/5
            font-normal
            outline outline-white
            bg-white/20
            text-white
            backdrop-blur-xs
            hover:bg-white/50
            transition
            duration-300
            ease-in-out
          "
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
