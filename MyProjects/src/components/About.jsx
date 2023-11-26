// src/components/About.js
import React from "react";
import Character from "./Character";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <section className="p-10">
      <div className="flex justify-center">
        <Character />
      </div>
      <div className="text-center p-4">
        <h2 className="text-6xl font-bold mb-2 ">I am Faizan Muhammad 👨‍💻</h2>
      </div>
      <div className="text-center text-4xl">
        <p>
          A passionate learner currently focusing on MERN Stack development.
          &#x2764;
        </p>
      </div>
      <div className="flex justify-center gap-6 my-8">
        <SocialIcon url="https://github.com" />
        <SocialIcon url="https://x.com" />
        <SocialIcon url="https://leetcode.com" />
        <SocialIcon url="https://linkedin.com" />
        <SocialIcon url="https://telegram.com" />
        <SocialIcon url="https://discord.com" />
      </div>
    </section>
  );
};

export default About;
