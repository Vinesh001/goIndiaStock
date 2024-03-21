import React, { useContext } from "react";
import Image from "next/image";
import { BsFillBellFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { FaCommentDollar } from "react-icons/fa6";
import NavContext from "@/contexts/context";

const Navbar = () => {
  const data: { logo: any; option: string }[] = [
    {
      logo: <MdMessage />,
      option: "Disscussion Form",
    },
    {
      logo: <FaCommentDollar />,
      option: "Market Stories",
    },
    {
      logo: "",
      option: "Sentiment",
    },
    {
      logo: "",
      option: "Market",
    },
    {
      logo: "",
      option: "WatchList",
    },
    {
      logo: "",
      option: "Evenets",
    },
    {
      logo: "",
      option: "News/Interviews",
    },
  ];

  const navbar = useContext(NavContext)

  return (
    <div>
      <div className={`w-[25dvw] max-lg:w-[40dvw] flex flex-col items-center bg-[#1a3055] text-[#c7ced8] h-[100dvh] `}>
        <div className="flex items-center p-4 gap-2  w-full justify-between border-b-4 border-[#354e71]">
          <div className="flex items-center gap-2">
            <div className="">
              <Image
                src={"/data/image/vinesh_profile.png"}
                width={40}
                height={40}
                alt="profile"
                className="rounded-full"
              />
            </div>
            <div className="text-lg font-semibold text-white">Hello, User</div>
          </div>
          <div className="relative w-fit">
            <div className="text-white">
              <BsFillBellFill size={25} />
            </div>
            <div className="w-[8px] h-[8px] rounded-full absolute top-0 bg-red-500 right-1"></div>
          </div>
        </div>
        <div className="py-2"></div>
        <div className="w-full">
          {data.map((option, key) => {
            return (
              <div
                key={key}
                className="flex items-center gap-2 pl-5 hover:bg-[#142341]  hover:cursor-pointer"
              >
                <div className="text-xl text-white">
                  {option.logo !== "" ? (
                    option.logo
                  ) : (
                    <div className="pl-5"></div>
                  )}
                </div>
                <div className="font-semibold py-3 ">{option.option}</div>
                {/* <div className=""></div> */}
              </div>
            );
          })}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
