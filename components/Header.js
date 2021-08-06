import React, { useEffect, useState } from "react";
import {
  AccountCircle,
  Group,
  Language,
  Menu,
  Search,
} from "@material-ui/icons";
import Logo, { brand } from "../assets/Logo";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ alwaysShow, placeholder }) {
  const [show, setShow] = useState(!!alwaysShow);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const handleShow = (state) => {
    setShow(state);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    const listener = () => {
      if (alwaysShow) {
        setShow(true);
        return;
      }

      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const reset = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  return (
    <header
      className={`bg grid grid-cols-3 p-3.5 fixed top-0 z-50 justify-between w-full items-center transition-all duration-200 max-h-28 ${
        show && "bg-white"
      } ${!show ? "text-white" : "text-gray-500"}`}
    >
      <div onClick={() => router.push("/")} className={"cursor-pointer"}>
        <Logo color={show ? brand : "white"} />
      </div>

      <div
        className={`flex flex-grow max-w-xl justify-center items-center text-gray-400 ${
          show && "border"
        } border-gray-300 p-2 px-3 rounded-full ${show && "md:shadow-sm"}`}
      >
        {show && (
          <>
            <input
              className={"outline-none flex-grow"}
              placeholder={placeholder || "Start your search"}
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <div
              className={
                "p-1.5 rounded-full cursor-pointer bg-red-400 hidden md:inline-flex text-white"
              }
              onClick={search}
            >
              <Search />
            </div>{" "}
          </>
        )}
      </div>

      <div className={"flex justify-end items-center"}>
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

      {searchInput && (
        <div className={"flex flex-col col-span-3 mx-auto bg-white p-3"}>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={(ranges) => {
              setStartDate(ranges.selection.startDate);
              setEndDate(ranges.selection.endDate);
            }}
          />

          <div className={"flex items-center"}>
            <h2 className={"text-2xl flex-grow font-semibold"}>
              Number of Guests
            </h2>

            <Group className={"h-5"} />

            <input
              type="number"
              value={guests}
              min={1}
              onChange={(event) => setGuests(event.target.value)}
              className={"w-12 pl-2 text-lg outline-none text-red-400"}
            />
          </div>

          <div className={"flex mt-5"}>
            <button className={"flex-grow"} onClick={reset}>
              Cancel
            </button>
            <button className={"flex-grow text-red-400"} onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
