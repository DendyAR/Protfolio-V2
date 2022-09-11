import Image from "next/image";
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import FileIcon from "../assets/icon/file.png";
import Project from "../components/Project";
import Avatar from "../assets/avatar.svg";
import Footer from "../components/Footer";
import ThisIsMe from "../components/ThisIsMe";
import GlbFolder from "../components/GlbFolder.js";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const aboutSection = useRef(null);
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Dendy Anugerah Ramadhan</title>
        <meta charSet="utf-8" onBlurCapture=""/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Dendy anugerah ramadhan" />
        <meta property="og:image" content="/Frame.svg" />
        <link rel="icon" href="/medal.png" />
      </Head>
      <div className="w-full bg-[#ffffff]">
        <Navbar />
        <div className="flex flex-col items-center text-start sm:text-left mt-20 px-5  my-32">
          <div className="flex flex-col lg:gap-3">
            <h1 className="md:text-5xl text-3xl font-[Khumb] text-[#474748] font-semibold">
              Hello ,{" "}
              <Image src={Avatar} alt="avatar" width={100} height={100}  data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1000"/>
              ....
            </h1>
            <span className="md:text-5xl text-3xl font-[Khumb] text-[#474748]">
              My name is
            </span>
            <span className="text-transparent lg:text-5xl text-3xl font-bold py-5 bg-clip-text bg-gradient-to-r from-[#7E87FD] via-[#3B9EC3] to-[#F55AAC]">
              Dendy Anugerah Ramadhan
            </span>
            <h4 className="md:text-5xl text-3xl font-[Khumb] text-[#474748] font-semibold">
              I am a Web Developer React Js{" "}
            </h4>
            <div className="mt-10" onClick={() => scrollDown(aboutSection)}>
              <button className="bg-black/80 hover:bg-black/60 transition-all duration-500 w-40 h-12 rounded-full text-base">
                My Resume{" "}
                <Image src={FileIcon} alt="icon-file" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
        <Project />
        <ThisIsMe />
        <section className="py-10 md:py-16 font-[Khumb]" ref={aboutSection}>
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center text-center my-10">
              <div className="">
                <h1 className="text-3xl font-bold text-[#474748]">Resume</h1>
              </div>
              <div className="">
                <Link
                  href="https://drive.google.com/file/d/1U3tvFPajI96KYU1M9a7H1SzXZI4rA6zE/view?usp=sharing"
                  target="_blank"
                >
                  <button className="bg-black/80 hover:bg-black/60 transition-all duration-500 w-40 h-12 rounded-full text-base">
                    Resume PDF{" "}
                    <Image
                      src={FileIcon}
                      alt="icon-file"
                      width={20}
                      height={20}
                      priority
                      objectFit="fill"
                    />
                  </button>
                </Link>
              </div>
            </div>
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Education
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 px-8 py-10 rounded-md">
                <h4 className="font-medium text-gray-700 text-lg mb-4">2021</h4>
                <p className="font-normal text-gray-500 text-md mb-4">
                  Fazztrack Tech Academy - Full Stack Web Developer
                </p>
                <div className="relative">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    <a
                      href="https://www.google.com/maps/place/Jl.+Kejaksaan+No.17B,+RT.3%2FRW.5,+Pd.+Bambu,+Kec.+Duren+Sawit,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13430/@-6.2381057,106.8988763,17z/data=!4m13!1m7!3m6!1s0x2e69f3377a246661:0x7185bfb2b446163!2sJl.+Kejaksaan+No.17B,+RT.3%2FRW.5,+Pd.+Bambu,+Kec.+Duren+Sawit,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13430!3b1!8m2!3d-6.238111!4d106.901065!3m4!1s0x2e69f3377a246661:0x7185bfb2b446163!8m2!3d-6.238111!4d106.901065?hl=id"
                      alt="maps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      See the place here
                    </a>
                  </h6>
                  <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-10 rounded-md">
                <h4 className="font-medium text-gray-700 text-lg mb-4">
                  2016 - 2019
                </h4>
                <p className="font-normal text-gray-500 text-md mb-4">
                  Universitas Bina Sarana Informatika - System Information
                </p>
                <div className="relative">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    <a
                      href="https://www.google.com/maps/place/Universitas+Bina+Sarana+Informatika+Kampus+Karawang+(UBSI+Karawang)/@-6.2961289,107.2998858,19.22z/data=!4m5!3m4!1s0x2e6977e5a885bf53:0xa75f972bab73c8c5!8m2!3d-6.2960203!4d107.2998384?hl=id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See the place here
                    </a>
                  </h6>
                  <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16 font-[Khumb]">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center">
              <p className="font-medium text-gray-700 text-xs md:text-base">
                In my many years of experience, I use @NodeJS for backend
                projects and @ReactJS Or @NextJS for <br /> front-end projects.
                I’m an avid programmer, so I create designs based on the <br />{" "}
                weekend @figmadesign.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16 font-[Khumb]">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Experience
            </h1>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                <h6 className="font-medium text-[#474748]  text-base uppercase">
                  Company
                </h6>
                <p className="font-semibold text-gray-600 text-base">
                  PT Benua Intergarsi Global{" "}
                  <span className="font-normal text-gray-300">
                    / Jakarta , Indonesia
                  </span>
                </p>
                <p className="font-semibold text-gray-600 text-base">
                  PT Inti Cakrawala Citra{" "}
                  <span className="font-normal text-gray-300">
                    / Karawang , Indonesia
                  </span>
                </p>
              </div>
              <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                <h6 className="font-medium text-[#474748]  text-base uppercase">
                  Position
                </h6>
                <p className="font-normal text-[#474748]  text-base">
                  Junior Front-End Developer
                </p>
                <p className="font-normal text-[#474748]  text-base">
                  Junior Front-End Developer
                </p>
              </div>
              <div className="space-y-8 md:space-y-16">
                <h6 className="font-medium text-[#474748]  text-base uppercase">
                  Year
                </h6>
                <p className="font-normal text-[#474748]  text-base">2022</p>
                <p className="font-normal text-[#474748]  text-base">
                  2018 - 2019
                </p>
              </div>
            </div>
          </div>
        </section>
        <GlbFolder />
        <Footer />
      </div>
    </React.Fragment>
  );
}
