import React from "react";
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex group items-center m-2 mt-5 space-x-6 rounded-xl cursor-pointer hover:bg-gray-100  hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative rounded-xl w-20 h-20 shadow-2xl overflow-y-auto group-hover:shadow-none  group-hover:scale-75 group-hover:transition transform duration-200 ease-in-out">
        <Image src={img} layout="fill" className="rounded-xl " />
      </div>
      <span className=" group-hover:-ml-0.5 delay-100 transition transform duration-300">
        <h2 className="font-bold text-gray-900">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </span>
    </div>
  );
}

export default SmallCard;
