"use client";
import CommentCard from "@/components/home/forum/CommentCard";
import StorieCard from "@/components/home/stories/StorieCard";
import Navbar from "@/components/home/navbar/Navbar";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";
import NavContext from "@/contexts/context";
import data from "@/public/data/raw/forum";
import storyData from "@/public/data/raw/story";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [forums, setForums] = useState(true);
  const [stories, setStrories] = useState(false);

  const story = !forums && stories ? "block" : "hidden";
  const forum = forums && !stories ? "block" : "hidden";

  return (
    <NavContext.Provider value={navbar}>
      <main className="flex w-[100dvw] h-[100dvh] ">
        {navbar ? (
          <div className="max-lg:fixed">
            <Navbar />
          </div>
        ) : (
          ""
        )}
        <div
          className={`flex w-full h-full gap-10 overflow-y-scroll max-md:flex max-md:flex-col`}
        >
          <div className="md:hidden flex font-semibold text-[0.8rem] bg-[#1e375f] text-white w-full text-center hover:cursor-pointer">
            <div
              className="py-5 w-1/2"
              onClick={() => {
                setForums(true);
                setStrories(false);
              }}
              style={{
                borderBottom: forums && !stories ? "2px solid red" : "",
                backgroundColor: forums && !stories ? "#142841" : "#1e375f",
              }}
            >
              Discussion Forums
            </div>
            <div
              className="py-5 w-1/2"
              onClick={() => {
                setForums(false);
                setStrories(true);
              }}
              style={{
                borderBottom: !forums && stories ? "2px solid red" : "",
                backgroundColor: !forums && stories ? "#142841" : "#1e375f",
              }}
            >
              Market Stories
            </div>
          </div>
          <div
            className={`w-3/4 flex flex-col gap-2 max-lg:w-[64dvw] max-md:w-[100dvw]`}
          >
            <div
              className={`fixed top-1/2 -translate-y-1/2 w-[1.2rem] h-[7rem] bg-[#1e375f]`}
              style={{
                marginLeft: navbar && window.innerWidth < 1024 ? "80dvw" : "0",
              }}
              onClick={() => {
                const check: boolean = navbar === true ? false : true;
                setNavbar(check);
              }}
            >
              <div className="absolute top-1/2 right-[-10px] -translate-y-1/2 text-white">
                {navbar ? (
                  <GoTriangleLeft size={30} />
                ) : (
                  <GoTriangleRight size={30} />
                )}
              </div>
            </div>
            <div className="font-bold text-xl px-5 py-2 ml-6 bg-gray-200 w-fit text-red-600 max-md:hidden">
              DISSCUSSION FORM
            </div>
            <div
              className={`flex flex-col gap-20 bigScreen ${forum}`}
            >
              {data.map((item, key) => (
                <CommentCard
                  key={key}
                  image={item.image}
                  heading={item.heading}
                  paragraph={item.paragraph}
                />
              ))}
            </div>
          </div>
          <div
            className={`w-1/4 flex flex-col gap-2 max-lg:w-[30dvw] max-md:w-[100dvw] `}
          >
            <div className="font-bold text-md px-5 py-2 mx-4 bg-gray-200 w-fit text-red-600 max-md:hidden">
              MARKET STORIES
            </div>
            <div
              className={`flex flex-col gap-10 bigScreen ${story}`}
            >
              {storyData.map((item, key) => (
                <StorieCard
                  key={key}
                  image={item.image}
                  heading={item.heading}
                  paragraph={item.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </NavContext.Provider>
  );
}
