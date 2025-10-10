const Navbar = () => {
  const menuItems = ["Home", "Our Products", "About us", "Blogs", "Contact us"];

  return (
    <nav className="w-fit flex justify-center gap-4 bg-transparent items-start">
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
