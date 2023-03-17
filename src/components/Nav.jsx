import React from "react";
import Logo from "../assets/images/logo.svg";
import { TfiMenu } from "react-icons/tfi";
import { MdClose } from "react-icons/md";

export default function Nav() {
  const menu = [
    {
      name: "Home",
      link: "./",
    },
    {
      name: "New",
      link: "./",
    },
    {
      name: "Popular",
      link: "./",
    },
    {
      name: "Trending",
      link: "./",
    },
    {
      name: "Categories",
      link: "./",
    },
  ];

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((prev) => !prev);
    console.log(open);
  }

  const icon = open ? (
    <MdClose
      className="z-10 text-5xl absolute top-7 right-7 md:hidden"
      onClick={handleOpen}
    />
  ) : (
    <TfiMenu
      className="z-10 text-5xl text-black absolute top-7 right-7 md:hidden"
      onClick={handleOpen}
    />
  );

  return (
    <div>
      <nav className="md:flex md:justify-between md:items-center md:pt-10 md:pb-16 mb-5 px-10 py-8">
        <div className="relative z-10">
          <img src={Logo} alt="logo"/>
        </div>

        {icon}

        <ul className={` md:flex text-center md:static absolute pt-40 px-20 md:px-0 
        md:pt-0 bg-red md:bg-off-white h-screen md:h-auto left-0 w-full md:w-auto transition-all duration-500 ease-in
        ${open ? "top-0" : "top-[-850px]"} navigation`}>
          {menu.map((item) => (
            <li className="md:px-3 md:text-dark-blue text-off-white  md:hover:text-red duration-500  py-5 md:hover:text-base hover:text-xl">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
