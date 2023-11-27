// src/components/About.js
import React from "react";
import Character from "./Character";
import { SocialIcon } from "react-social-icons";

const About = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <section className="w-full">
      <div className="flex justify-center">
        <Character />
      </div>
      <div className="text-center p-4">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 ">
          I am Faizan Muhammad 👨‍💻
        </h2>
      </div>
      <div className="text-center text-sm	md:text-xl lg:text-4xl">
        <p>
          A passionate learner currently focusing on MERN Stack development.
          &#x2764;
        </p>
      </div>
      <div className="flex justify-center gap-2 md:gap-4 lg:gap-6 my-8">
        <SocialIcon
          className="hover:opacity-60"
          target="_blank"
          url="https://github.com/faizanmuhammad1"
        />
        <SocialIcon
          className="hover:opacity-60"
          target="_blank"
          url="https://twitter.com/faizanmuhammadd"
        />
        <SocialIcon
          className="hover:opacity-60"
          target="_blank"
          url="https://leetcode.com/bhattibhai/"
        />
        <SocialIcon
          className="hover:opacity-60"
          target="_blank"
          url="https://www.linkedin.com/in/faizanmuhammad2/"
        />
        <SocialIcon
          className="hover:opacity-60"
          target="_blank"
          network="telegram"
          url="https://t.me/faizanmuhammad"
        />
        <SocialIcon
          className="hover:opacity-60"
          target="_blank"
          url="https://https://discord.com/users/572489048464293898"
        />
      </div>
    </section>
  );
};

export default About;
