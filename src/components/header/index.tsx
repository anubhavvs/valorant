import { useState } from "react";
import Image from "next/image";

import Logo from "@/icons/logo";
import ErrorIcon from "@/icons/error";
import MissionIcon from "@/icons/mission";
import Challenges from "@/icons/challenges";

const Header = () => {
  const [missions, setMissions] = useState(2);
  const [challenges, setChallenges] = useState(3);
  const [valorantPoints, setValorantPoints] = useState(1600);
  const [radianitePoints, setRadianitePoints] = useState(100);

  return (
    <div className="flex flex-row justify-between p-2">
      <div className="flex flex-row justify-center space-x-3">
        <Logo />
        <div className="flex flex-col leading-none">
          <span className="text-[3em] stroke-black max-h-fit font-[700] text-white tracking-wide">
            REVELATION
          </span>
          <span className="font-[600] text-white tracking-widest">
            EPISODE 6 /// ACT III
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center font-[400] text-[1.1em] tracking-widest text-white h-fit space-x-9">
        <div className="flex flex-row space-x-4">
          <button className="rounded-full h-fit border border-red-800">
            <ErrorIcon />
          </button>
          <div className="flex flex-row items-center space-x-1">
            <MissionIcon />
            <span>0/{missions}</span>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <Challenges />
            <span>0/{challenges}</span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Image
            src="/images/Valorant_Points.webp"
            width={18}
            height={18}
            alt="valorant points icon"
          />
          <span>{valorantPoints}</span>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Image
            src="/images/Radianite_Points.webp"
            width={18}
            height={18}
            alt="radianite points icon"
          />
          <span>{radianitePoints}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
