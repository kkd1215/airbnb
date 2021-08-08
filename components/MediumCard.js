import React from "react";
import Image from "next/image";

function MediumCard({ img, title, desc, h3Class }) {
  return (
    <div className="cursor-pointer hover:scale-95 transform transition duration-300 ease-out">
      <div
        className={
          desc
            ? "relative h-96 w-96 rounded-xl shadow-xl overflow-y-auto hover:shadow-none"
            : "relative h-80 w-80 rounded-xl shadow-xl overflow-y-auto hover:shadow-none"
        }
      >
        <Image src={img} layout="fill" className=" rounded-xl shadow-lg" />
      </div>
      <h3 className={h3Class}>{title}</h3>
      {desc && <h4 className="text-sm text-gray-500">{desc}</h4>}
    </div>
  );
}

export default MediumCard;
