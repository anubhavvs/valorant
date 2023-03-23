import SettingsIcon from "@/icons/settings";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center w-[3%] min-h-full">
      <button className="p-2">
        <SettingsIcon />
      </button>
      <div className="bg-[#111B24] h-full max-h-full min-w-full mt-1">
        Sidebar
      </div>
    </div>
  );
};

export default Sidebar;
