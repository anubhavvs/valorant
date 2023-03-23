const MenuItem = ({ text }: any) => (
  <li className="flex flex-row items-center space-x-8">
    <div className="bg-white w-2 h-2 rotate-45"></div>
    <button className="text-white uppercase text-[3rem] leading-tight font-[600] tracking-wider">
      {text}
    </button>
  </li>
);

const FirstMenuItem = ({ text }: any) => (
  <li className="flex flex-row items-center space-x-8">
    <div className="bg-white w-2 h-2 rotate-45"></div>
    <button className="text-[#f00] uppercase text-[6rem] leading-tight font-[700] tracking-wide">
      {text}
    </button>
  </li>
);

const Menu = () => {
  return (
    <div className="px-4">
      <ul>
        <FirstMenuItem text={"Play"} />
        <MenuItem text={"Career"} />
        <MenuItem text={"Battlepass"} />
        <MenuItem text={"Collection"} />
        <MenuItem text={"Agents"} />
        <MenuItem text={"Store"} />
      </ul>
    </div>
  );
};

export default Menu;
