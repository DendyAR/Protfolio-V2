import Image from "next/image";
import React from "react";
import ImageDendy from "../assets/dendy.svg";
import Frame from "../assets/Frame.svg"
import Frame1 from "../assets/Frame-1.svg"
import Frame2 from "../assets/Frame-2.svg"
import Frame3 from "../assets/Frame-3.svg"

const ThisIsMe = () => {
  return (
    <div className="grid grid-col-1 justify-items-center lg:grid-cols-2 mx-5 lg:mx-32 mt-56">
      <div className="flex flex-col w-full p-5">
        <h1 className="text-3xl  text-[#474748] font-semibold">Hello ,</h1>
        <span className="text-3xl text-[#474748]">My name Is</span>
        <span className="text-transparent text-3xl  font-semibold bg-clip-text bg-gradient-to-r from-[#7E87FD] via-[#3B9EC3] to-[#F55AAC]">
          Dendy Anugerah Ramadhan
        </span>
        <h4 className="text-3xl text-[#474748] font-semibold">
          I am a Web Developer React Js{" "}
        </h4>
        <p className="text-base font-[Khumb] font-medium text-slate-700 break-words leading-7 mt-5">
          A Fullstack Web Developer who has high motivation and enthusiasm to
          learn programming languages. Have fast adaptability and the ability to
          work in a team or individually. I have programming skills such as
          JavaScript, HTML, and several frameworks, Like a NodeJS, Express JS,
          NextJS, ReactJS and PostgresSQL as databases.
        </p>
        <div className="flex flex-row justify-center items-center mt-5 lg:mt-28">
        <Image src={Frame} alt="frame" width={140} height={140} priority data-aos="fade-right" data-aos-duration="3000"/>
        <Image src={Frame1} alt="frame" width={140} height={140} priority data-aos="fade-up" data-aos-duration="2000"/>
        <Image src={Frame2} alt="frame" width={140} height={140} priority data-aos="fade-up" data-aos-duration="2000"/>
        <Image src={Frame3} alt="frame" width={140} height={140} priority data-aos="fade-left" data-aos-duration="3000"/>
        </div>
      </div>

      <div className="w-full flex justify-center items-center text-center">
        <Image
          src={ImageDendy}
          alt="Picture of the author"
          width={500}
          height={500}
          objectFit="fill"
          priority
          className="grayscale hover:grayscale-0 transition duration-700"
        />
      </div>
    </div>
  );
};

export default ThisIsMe;
