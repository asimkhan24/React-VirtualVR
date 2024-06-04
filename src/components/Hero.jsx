import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const Hero = () => {
  return (
    <div className=" hero flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center  text-neutral-500 max-w-4xl">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. <br /> Get started today and turn your imgination into immersive reality!</p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border flex justify-center items-center">
            Documentation
        </a>
      </div>
      <div className="mt-10 flex justify-center gap-4 flex-wrap lg:flex-nowrap md:flex-nowrap">
  <video autoPlay loop muted className="rounded-lg w-[85%] md:w-[50%]  lg:w-[50%] border border-orange-700 shadow-orange-400">
    <source src={video1} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
  <video autoPlay loop muted className="rounded-lg w-[85%] md:w-[50%]  lg:w-[50%] border border-orange-700 shadow-orange-400">
    <source src={video2} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>

    </div>
  );
};

export default Hero;
