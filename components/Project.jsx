import Image from "next/image";
import React, { useEffect } from "react";
import NftsImage from "../assets/Nfts.svg";
import NextButton from "../assets/icon/next.svg";
import Card from "./Card/Card";
import ThisIsMe from "./ThisIsMe";
import Movie from "../assets/movie.png"
import Coffee from "../assets/coffee.png"
import BigArticle from "../assets/bigarticle.webp"
import BigCommpany from "../assets/bigcompanny.png"
import Link from "next/link";
import AOS from "aos"

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full mx-auto mt-32 px-3 lg:px-10">
        <div className="border-t-2 border-black/60 mb-5">
          <div className="flex flex-col gap-3 w-full px-5 md:px-44 font-[Khumb]" data-aos="fade-up" >
            <div className="flex flex-row justify-between" >
              <div className="flex flex-col py-5">
                <h3 className="text-sm md:text-lg font-bold text-[#474748]">
                  Web App
                </h3>
                <h4 className="text-sm md:text-lg text-[#474748] font-semibold">
                  Project NFTs
                </h4>
              </div>
              <Link href="https://github.com/DendyAR/Nfts-web" target="_blank"> 
              <button className="text-[#474748] bg-transparent hover:border-b-2 border-black/80 transition-all duration-100 font-extrabold rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                More Details{" "}
                <Image src={NextButton} alt="icon" width={32} height={32}  objectFit="fill"/>
              </button>
              </Link>
            </div>
            <Image src={NftsImage} alt="image" className="rounded-lg" priority objectFit="fill" />
          </div>
        </div>
        <div className="border-t-2 border-black/60 mb-5" >
          <div className="flex flex-col gap-3 w-full px-5 md:px-44 font-[Khumb]" data-aos="fade-up" >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col py-5">
                <h3 className="text-sm md:text-lg font-bold text-[#474748]">
                  Web App
                </h3>
                <h4 className="text-sm md:text-lg text-[#474748] font-semibold">
                  Project Movie
                </h4>
              </div>
              <Link href="https://github.com/DendyAR/Movie-app" target="_blank"> 
              <button className="text-[#474748] bg-transparent hover:border-b-2 border-black/80 transition-all duration-100 font-extrabold rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                More Details{" "}
                <Image src={NextButton} alt="icon" width={32} height={32} objectFit="fill" />
              </button>
              </Link>
            </div>
            <Image src={Movie} alt="image" className="rounded-lg"  priority objectFit="fill"/>
          </div>
        </div>
        <div className="border-t-2 border-black/60 mb-5">
          <div className="flex flex-col gap-3 w-full px-5 md:px-44 font-[Khumb]" data-aos="fade-up">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col py-5">
                <h3 className="text-sm md:text-lg font-bold text-[#474748]">
                  Web App
                </h3>
                <h4 className="text-sm md:text-lg text-[#474748] font-semibold">
                  Project Coffee
                </h4>
              </div>
              <Link href="https://github.com/DendyAR/Coffee-Shop" target="_blank"> 
              <button className="text-[#474748] bg-transparent hover:border-b-2 border-black/80 transition-all duration-100 font-extrabold rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                More Details{" "}
                <Image src={NextButton} alt="icon" width={32} height={32}  objectFit="fill"/>
              </button>
              </Link>
            </div>
            <Image src={Coffee} alt="image" className="rounded-lg" priority  objectFit="fill"/>
          </div>
        </div>
        <div className="border-t-2 border-black/60 mb-5">
          <div className="flex flex-col gap-3 w-full px-5 md:px-44 font-[Khumb]" data-aos="fade-up">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col py-5">
                <h3 className="text-sm md:text-lg font-bold text-[#474748]">
                  Web App
                </h3>
                <h4 className="text-sm md:text-lg text-[#474748] font-semibold">
                  Project Big Articles
                </h4>
              </div>
              <Link href="https://github.com/bigcompany-dev/Big-Frontend-Article" target="_blank"> 
              <button className="text-[#474748] bg-transparent hover:border-b-2 border-black/80 transition-all duration-100 font-extrabold rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                More Details{" "}
                <Image src={NextButton} alt="icon" width={32} height={32} objectFit="fill" />
              </button>
              </Link>
            </div>
            <Image src={BigArticle} alt="image" className="rounded-lg" priority  objectFit="fill"/>
          </div>
        </div>
        <div className="border-t-2 border-black/60 mb-5">
          <div className="flex flex-col gap-3 w-full px-5 md:px-44 font-[Khumb]" data-aos="fade-up">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col py-5">
                <h3 className="text-sm md:text-lg font-bold text-[#474748]">
                  Web App
                </h3>
                <h4 className="text-sm md:text-lg text-[#474748] font-semibold">
                  Project Big Commpany
                </h4>
              </div>
              <Link href="https://bigmetaverse.io/" target="_blank"> 
              <button className="text-[#474748] bg-transparent hover:border-b-2 border-black/80 transition-all duration-100 font-extrabold rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                More Details{" "}
                <Image src={NextButton} alt="icon" width={32} height={32}  objectFit="fill"/>
              </button>
              </Link>
            </div>
            <Image src={BigCommpany} alt="image" className="rounded-lg" priority objectFit="fill"/>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#f2f2f2] mt-32">
        <span className="py-10 font-[Khumb]">
          <h1 className="text-2xl md:text-5xl font-bold text-[#474748]">
            And other projects
          </h1>
        </span>
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Project;
