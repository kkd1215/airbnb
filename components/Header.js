import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header({ classs, placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const handleInput = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchInput) {
      search();
    }
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
    resetInput();
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleScroll = () => {
    if (window.screen.width > 768) {
      if (window.scrollY > 60) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${classs} w-full top-0 z-50 grid grid-cols-3 ${
        styles.navbar
      } p-5 md:px-10 ${show && styles.navbar_stickey}`}
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://kdsh.herokuapp.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
          className={`pl-5 bg-transparent outline-none flex-grow text-sm ${
            styles.inputClass
          } ${
            show
              ? "text-gray-600 placeholder-gray-400"
              : "text-gray-400 placeholder-gray-300"
          }`}
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer" />
        <div className="hidden md:inline-flex items-center border-2 space-x-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="absolute w-screen h-[80vh] top-20 z-50 bg-white rounded-xl shadow-2xl">
          <div className="flex flex-col col-span-3 mx-auto max-w-full mt-3 md:w-[580px] left-1 md:left-[20%] lg:left-[30%] ">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleInput}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl pl-2 flex-grow font-semibold">
                Number of Guests
              </h2>

              <UsersIcon className="h-5" />
              <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min={1}
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex">
              <button
                onClick={resetInput}
                className="flex-grow font-semibold text-red-600 bg-red-200 rounded-3xl"
              >
                {" "}
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow font-semibold text-red-600 bg-gray-100 p-2 ml-1 rounded-3xl"
              >
                {" "}
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
