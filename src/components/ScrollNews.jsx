import React from "react";
import image1 from "../assets/images/image-retro-pcs.jpg";
import image2 from "../assets/images/image-gaming-growth.jpg";
import image3 from "../assets/images/image-top-laptops.jpg";

export default function ScrollNews() {
  const data = [
    {
      image: image1,
      title: "Reviving Retro Pcs",
      details: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: image2,
      title: "Top 10 Laptops of 2022",
      details: "Our best picks for various needs and budgets.",
    },
    {
      image: image3,
      title: "The Growth of Gaming",
      details: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <div className="grid  gap-8 grid-cols-3 mt-16">
      {data.map((news, index) => {
        return (
          <div className="flex justify-center space-x-4 ">
            <div className="w-40">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-blue">{`0${
                index + 1
              }`}</p>
              <h1 className="text-lg mt-5 font-bold text-darkest-blue hover:text-red duration-500 cursor-pointer">
                {news.title}
              </h1>
              <p className="text-sm text-dark-blue">{news.details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
