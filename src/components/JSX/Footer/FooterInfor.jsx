import React from "react";
export default function FooterInfor() {
  return (
    <div className="md:w-[80%] lg:w-[60%]">
      <div className="flex justify-between items-center ml-5 md:ml-0 h-full">
        <ul className="text-dark dark:text-white">
          <li className="uppercase font-bold text-[1em] lg:text-[1.4em] ">
            introduce
          </li>
          <li className="">Term of use</li>
          <li className="">Privacy</li>
          <li className="">Discount</li>
        </ul>

        <ul className="text-dark dark:text-white">
          <li className="uppercase font-bold text-[1em] lg:text-[1.4em] ">
            support
          </li>
          <li className="">+84 934102678</li>
          <li className="">baotien123321@gmail.com</li>
          <li className="">Thank for watching :3</li>
        </ul>

        <div className="w-[33%] flex flex-col items-center cursor-pointer">
          <div className="uppercase text-center text-black font-bold text-[1em] lg:text-[1.4em] dark:text-white">
            download app now!
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[67%]"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt=""
            />
            <img
              className="w-[60%]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
