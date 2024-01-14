"use client"
import Image from "next/image"
import YouTube from "react-youtube"
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const VideoPlayer = ({ youtubeId, images }) => {
   const [isOpen, setIsOpen] = useState(false);
   const option = {
      width: "100%",
      height: "350"
   }
   const handleClick = () => {
      setIsOpen((prev) => !prev);
   }
   const Player = () => {
      return (
         <div className="relative">
            <YouTube
               videoId={youtubeId}
               onReady={(event) => event.target.pauseVideo()}
               opts={option}
            />
            <button className={"absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-color-darkSecondary hover:bg-color-darkSecondary/60 flex items-center justify-center rounded-ss-md rounded-es-md"}
               onClick={handleClick}
            >
               <IoClose className="text-white" />
            </button>
         </div>
      )
   }
   const Dummy = () => {
      return (
         <div className=" relative h-[350px] overflow-hidden">
            <div className="w-full h-full bg-black flex justify-center">
               <Image
                  src={images}
                  alt="Video anime"
                  width={250}
                  height={250}
                  priority={true}
                  className="h-auto w-auto"
               />

            </div>
            <OverLay Icon={<FaPlay className="text-white" />} />
         </div>
      )
   }
   const OverLay = ({ Icon }) => {
      return (
         <div className={"absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center border border-color-darkSecondary"}>
            <h2 className="text-white text-3xl absolute top-20"> Watch Trailer</h2>
            <button className={"w-[50px] h-[50px] bg-gray-800 hover:bg-gray-900/80 flex rounded-full items-center justify-center"}
               onClick={handleClick}
            >
               {Icon}
            </button>
         </div>
      )
   }
   return (
      <>
         {isOpen ? <Player /> : <Dummy />}
      </>

   )
}

export default VideoPlayer