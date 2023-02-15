import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" p-5 w-48 shadow-lg">
      <ul className="mt-2 mx-5">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className="my-3 border-2" />
      <ul className="mt-2 mx-5">
        <li>Libraray</li>
        <li>History</li>
        <li>watch later</li>
      </ul>
      <hr className="my-3 border-2" />
      <h1 className="mx-3 font-bold">Subscriptions</h1>
      <ul className="mt-2 mx-5">
        <li>Shubh Codic</li>
        <li>Namaste Javascript</li>
        <li>Shubh Codic</li>
        <li>Namaste Javascript</li>
      </ul>
    </div>
  );
};

export default Sidebar;
