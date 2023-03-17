import React from "react";

export default function NewNews() {
  const news = [
    {
      title: "Hydrogen Vs Electric Cars",
      details: "Will hydrogen fuelled cars ever catch up with EVs?",
    },
    {
      title: "The Down Sides Of Ai Artistery",
      details:
        "What are the possible adverse effects of on-demand Ai image generation",
    },
    {
      title: "Is VC Funding Drying Up?",
      details:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return(
    <div className="text-[#ffffff] p-8">
       <h1 className="text-4xl font-bold mb-6 text-orange">New</h1>
       {news.map(item => (
        <>
        <h1 className="text-lg hover:text-orange duration-500 cursor-pointer"><strong>{item.title}</strong></h1>
        <p className="text-gray-blue text-sm pt-2 pb-8 hover:text-[#ffffff] duration-300">{item.details}</p>
        <hr className="pb-6 border-gray-blue last:hidden" />
        </>
       ))}
    </div>
  );
}
