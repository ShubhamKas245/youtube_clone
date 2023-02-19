import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { BiVideoPlus } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const [suggestion,setSuggestion]=useState([])
  const [showSuggestion,setShowSuggestion]=useState(false)

  const dispatch = useDispatch();

  const cacheMemory=useSelector((store)=>store.search);

  useEffect(()=>{
        const timer=setTimeout(()=>{
          if(cacheMemory[searchQuery]){
            setSuggestion(cacheMemory[searchQuery])
          }else{
        searchSuggestions()}},200);

        return ()=>{clearTimeout(timer)}
  },[searchQuery])
  

  const searchSuggestions= async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json=await data.json();
    setSuggestion(json[1])

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  }
   
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
        <div>
        <input
          className=" px-5 w-1/2 border border-gray-400 rounded-l-full py-1 mt-5"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className=" w-12 h-8 border border-gray-500 rounded-r-full bg-slate-300">
        🔍
        </button>
        </div>
        <div className="absolute bg-white py-1 px-4 w-[30rem] shadow-lg rounded-lg border border-gray-300">
          <ul>
            {showSuggestion && suggestion.map((s)=>(<li key={s} className="py-1 shadow-sm hover:bg-gray-300">🔍 {s}
            </li>))}  
          </ul>
        </div>
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
