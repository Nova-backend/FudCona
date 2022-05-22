import React from "react";

import {
  FaListUl,
  FaTable,
  FaJediOrder,
  FaChartPie,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="fixed left-0 w-full top-0 ">
      <div className="h-screen w-1/6 bg-black ">
        <h1 className="text-3xl text-white pl-6 pt-7 font-bold font-quickSand">
          Fud<span className="text-3xl text-[#989A38]">Cona</span>
        </h1>
        <div className=" mt-8 text-sm flex flex-col gap-2 ml-8">
        <Link to="/body">
          <i className="text-white flex gap-4 hover:bg-slate-800 h-12 items-center pl-2">
            <FaListUl className=""/>
            <span className="font-normal ml-4">Overview</span>
          </i>
        </Link>
        <i className="text-white flex gap-8 hover:bg-slate-800 h-12 items-center pl-2">
          <FaTable />
          <span className="font-normal">Tables</span>
        </i>
        {/* <Link to='./orderContent'> */}
        <Link to="/orders">
          <i className="text-white flex gap-8 hover:bg-slate-800 h-12 items-center pl-2">
            <FaJediOrder />
            <span className="font-normal">Orders</span>
          </i>
        </Link>
        {/* </Link> */}
        <Link to='/menu'>
        <i className="text-white flex gap-8 hover:bg-slate-800 h-12 items-center pl-2">
          <FaChartPie />
          <span className="font-normal">Menu</span>
        </i>
        </Link>
        </div>

        <div className="h-64 w-56 bg-[#989A38] absolute bottom-0 ml-2 pt-20 pl-8 ">
          <Link to="./account">
            <i className="text-white flex gap-8 hover:bg-slate-300 h-12 items-center pl-2 rounded-sm">
              <FaUser />
              <span className="">Account</span>
            </i>
          </Link>
          <Link to='/body'>
          <i className="text-white flex gap-8 hover:bg-slate-300 h-12 items-center pl-2 mt-2">
            <FaListUl />
            <span className="font-normal">Overview</span>
          </i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
