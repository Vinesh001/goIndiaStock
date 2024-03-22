import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";

interface CommentCardProps {
  image: string;
  heading: string;
  paragraph: string;
}

const CommentCard: React.FC<CommentCardProps> = ({ image, heading, paragraph }) => {
    

  return (
    <div>
      <div className="flex py-5 mb-[6rem]  md:px-6 shadow-lg rounded-md max-md:mb-[1rem]">
        <div className="pr-4">
          <Image
            src={image}
            width={40}
            height={40}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-5 items-center ">
            <div className="font-bold max-md:text-sm">{heading}</div>
            <div className="bg-[#2355a0] text-white px-5 py-1 rounded-full text-sm max-md:text-xs">
              Sector 2
            </div>
          </div>
          <div className="text-sm max-md:text-[12px]">
            {paragraph}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <FaRegHeart size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold max-md:text-[10px]">2k</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <LuEye size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold max-md:text-[10px]">2k</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <FiMessageSquare size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold max-md:text-[10px]">2k Comments</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <IoShareSocialOutline size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold max-md:text-[10px]">Share</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-[#2355a0] text-sm max-md:text-[10px] min-w-[70px] font-bold">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
