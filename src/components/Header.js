import React from "react";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col mx-2 shadow-lg ">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          className="text-2xl mx-2 my-5 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
       <a href="/"> <img
          className="h-16  text-center"
          alt="logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        /></a>
      </div>
      <div className="col-span-10 mx-14 mr-4">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full my-5 p-1"
          type="text"
        />
        <button className=" h-8 border border-gray-500 rounded-r-full bg-slate-300">
          Search
        </button>
      </div>
      <div className="flex col-span-1 ">
        <BiVideoPlus className="text-2xl mx-4 my-4" />
        <MdOutlineNotifications className="text-2xl mx-4 my-4" />
        <RxAvatar className="text-2xl mx-4 my-4" />
      </div>
    </div>
  );
};

export default Header;
