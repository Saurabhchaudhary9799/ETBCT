import React from "react";
import "../../App.css";
const ChiefGuest = () => {
  return (
    <section className="chief-guest px-6 md:px-16 flex flex-col md:flex-row py-5">
      <div className="  w-full md:w-3/6  flex justify-center items-center   ">
        <div className="parent relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-[50%]">
          <img
            className="child w-full h-full object-cover object-center rounded-[50%] transition-all duration-300 ease-in-out"
            src="../../.././cg.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-3/6  flex flex-col justify-center gap-y-2 sm:px-10">
        <h1 className="text-2xl font-bold">Dr. Lorem ipsum </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nam, deleniti commodi maxime ipsa numquam facilis amet magni
          recusandae vel. Amet voluptate, cumque voluptatibus sequi aperiam
          corrupti earum modi doloribus vitae facere quaerat laboriosam dolorem
          molestiae assumenda quisquam saepe repellendus quae tenetur! Sit
          facere suscipit accusantium soluta exercitationem velit assumenda.
        </p>
      </div>
    </section>
  );
};

export default ChiefGuest;
