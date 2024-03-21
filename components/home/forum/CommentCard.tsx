import Image from "next/image";
import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import NavContext from "@/contexts/context";

const CommentCard = () => {
    
    const navbar = useContext(NavContext);

  return (
    <div>
      <div className="flex px-5 pl-7 py-5 shadow-lg rounded-md mb-[4rem]">
        <div className="pr-4">
          <Image
            src={"/data/image/vinesh_profile.png"}
            width={50}
            height={50}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-5 items-center ">
            <div className="font-bold">Lorem Ipsum</div>
            <div className="bg-[#2355a0] text-white px-5 py-1 rounded-full text-sm">
              Sector 2
            </div>
          </div>
          <div className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            porro esse aspernatur doloremque illum blanditiis natus,
            reprehenderit temporibus illo nam aliquid alias perspiciatis magnam
            eveniet!
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <FaRegHeart size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold">2k</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <LuEye size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold">2k</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <FiMessageSquare size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold">2k Comments</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer">
                <IoShareSocialOutline size={20} className="font-bold" />
              </div>
              <div className="text-xs font-semibold">Share</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-[#2355a0] text-sm min-w-[70px] font-bold">
            2 min ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
