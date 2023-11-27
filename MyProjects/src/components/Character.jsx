import React from "react";
import myImage from "../assets/eye.png";

export default function Character() {
  return (
    <>
      <div className="relative flex justify-center">
        <img
          className="h-40 w-40 md:h-80 md:w-80"
          src="https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png"
          alt="MyProfile"
        />
        <img
          className="absolute h-10 w-10 md:h-20 md:w-20 right-[17%] top-[36%] eye"
          src={myImage}
          alt="image"
        />
        <img
          className="absolute h-10 w-10 md:h-20 md:w-20 top-[28%] right-[49%] eye"
          src={myImage}
          alt="image"
        />
      </div>
    </>
  );
}
