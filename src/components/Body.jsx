import React from "react";
import Image1 from "../assets/images/image-web-3-desktop.jpg";
import NewNews from "./NewNews";
import ScrollNews2 from "./ScrollNews2";

export default function Body() {
  return (
    <div >
      <div className="px-10">
        <div className="grid md:grid-cols-3 gap-8 items-start grid-cols-1">
          <div className="w-lg bg-sky-300 md:col-span-2 col-span-1">
            <img src={Image1} alt="growth image" className="" />
          </div>
          <div className="w-lg bg-darkest-blue md:row-span-2 row-span-1 h-full md:order-none order-last">
            <NewNews />
          </div>
          <div className="w-lg text-[4rem] font-extrabold text-darkest-blue">
            <h1 className="leading-[4rem]">The Bright Future of Web 3.0?</h1>
          </div>
          <div className="w-lg text-sm text-dark-blue">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              atque nemo, sunt deserunt qui repellendus vel ut, fugit sint quasi
              itaque repellat animi? atque nemo, sunt deserunt qui repellendus
              vel ut.
            </p>
            <button className="mt-10 tracking-widest bg-darkest-blue py-3 px-8 text-[#ffffff] text-sm hover:bg-red duration-500 hover:tracking-[.5rem]">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ScrollNews2 />
      </div>
    </div>
  );
}
