// src/components/About.js
import React from "react";

const About = () => {
  
  return (
    <section className="p-10">
      <div className="flex justify-center">
       <img className="rounded-[50%] w-[300px] h-[300px] m-4" src="https://avatars.githubusercontent.com/u/108667490?v=4" alt="MyProfile" />
      </div>
      <div className="text-center p-4">
        <h2 className="text-6xl font-bold mb-2 ">About Me</h2>
      </div>
      <div className="text-center text-4xl">
        <p>
          Hi, I'm Faizan Muhammad👨‍💻, a passionate learner currently focusing on
          MERN Stack development. &#x2764;
        </p>
      </div>
    </section>
  );
};

export default About;
