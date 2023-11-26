import React from "react";
import myImage from "../assets/eye.png";

export default function Character() {
  return (
    <>
      <div className="flex justify-center w-full">
        <img
          className="h-80 w-80"
          src="https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png"
          alt="MyProfile"
        />
      </div>
      <div>
        <img
          className="absolute h-20 w-20 top-[40%] left-[52%] eye"
          src={myImage}
          alt="image"
        />
        <img
          className="absolute h-20 w-20 top-[37%] right-[50%] eye"
          src={myImage}
          alt="image"
        />
      </div>
    </>
  );
}
