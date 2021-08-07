import React from "react";
import Image from "next/image";

function LargeCard({
  img,
  title,
  description,
  buttonText,
  h3Class,
  buttonClass,
  pClass,
}) {
  return (
    <section className="relative py-16 ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className={h3Class}>{title}</h3>
        <p className={pClass}>{description}</p>
        <button className={buttonClass}>{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
