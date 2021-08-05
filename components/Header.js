import React, { useEffect, useState } from "react";
import { AccountCircle, Language, Menu, Search } from "@material-ui/icons";
import Logo, { brand } from "../assets/Logo";

function Header() {
  const [show, setShow] = useState(false);

  const handleShow = (state) => {
    setShow(state);
  };

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`bg flex p-3.5 fixed top-0 z-50 justify-between w-full items-center transition-all duration-200 ${
        show && "bg-white"
      } ${!show ? "text-white" : "text-gray-500"}`}
    >
      <Logo color={show ? brand : "white"} />

      <div
        className={`flex flex-grow max-w-xl justify-center items-center text-gray-400 ${
          show && "border"
        } border-gray-300 p-2 px-3 rounded-full ${show && "md:shadow-sm"}`}
      >
        {show && (
          <>
            <input
              className={"outline-none flex-grow"}
              placeholder={"Start your search"}
            />
            <div
              className={
                "p-1.5 rounded-full cursor-pointer bg-red-400 hidden md:inline-flex text-white"
              }
            >
              <Search />
            </div>{" "}
          </>
        )}
      </div>

      <div className={"flex justify-between items-center"}>
        <div className={"flex justify-between items-center"}>
          <div className={"mr-3"}>Become a host</div>
          <Language />
        </div>

        <div
          className={`flex justify-between items-center ml-5 mx-3 ${
            show && "border-2 border-gray-500"
          } p-2 rounded-full bg-white text-gray-500`}
        >
          <Menu className={"mx-2"} />
          <AccountCircle />
        </div>
      </div>
    </header>
  );
}

export default Header;
