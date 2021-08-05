import React from "react";
import { AccountCircle, Language, Menu, Search } from "@material-ui/icons";

function Header() {
  return (
    <header
      className={
        "bg flex p-3.5 sticky top-0 z-50 justify-between w-full items-center"
      }
    >
      <img
        className={"w-32"}
        src="https://links.papareact.com/qd3"
        alt="airbnb"
      />

      <div
        className={
          "flex flex-grow max-w-xl justify-center items-center text-gray-400 border border-gray-300 p-2 px-3 rounded-full md:shadow-sm"
        }
      >
        <input
          className={"outline-none flex-grow"}
          placeholder={"Start your search"}
        />
        <div
          className={
            "p-1.5 rounded-full cursor-pointer bg-red-400 hidden md:inline-flex  text-white"
          }
        >
          <Search />
        </div>
      </div>

      <div className={"flex justify-between items-center text-gray-500"}>
        <div className={"flex justify-between items-center"}>
          <div className={"mr-3"}>Become a host</div>
          <Language />
        </div>

        <div
          className={
            "flex justify-between items-center ml-5 mx-3 border-2 border-gray-500 p-2 rounded-full"
          }
        >
          <Menu className={"mx-2"} />
          <AccountCircle />
        </div>
      </div>
    </header>
  );
}

export default Header;
