import React from "react";
import { NavLink } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { BiImage  } from "react-icons/bi";



const Header = () => {

  
  return (
    <div className="flex py-3 pt-6 justify-between items-center">
      <h1 className="text-2xl font-semibold">DotChat</h1>
      <div className="gap-5 flex">
        <NavLink
          className='border flex gap-2 px-5 rounded-full p-2' to={"/app/chat"}>
            <BiCommentDetail className="text-[1.4rem]" /> Chats
        </NavLink>
        <NavLink 
          className='border flex gap-2 items-center px-5 rounded-full p-2 ' to={"/app/images"}>
            <BiImage className="text-[1.4rem]" /> Images
        </NavLink>
        <NavLink 
          className='border flex gap-2 px-5 rounded-full p-2' to={"/app/videos"}>
            <BiVideo className="text-[1.4rem]" /> Videos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
