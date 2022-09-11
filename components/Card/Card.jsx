import Image from "next/image";
import React from "react";
import NewsApp from "../../assets/newsapp.png";
import Tiket from "../../assets/tickizt.png";
import Kurangguru from "../../assets/kurangguru.png";

const Card = () => {
  return (
    <div className="container mx-auto px-4 mb-32">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-2 w-full text-black">
          <div className="col-span-4 rounded" data-aos="fade-up">
            <Image src={Tiket} alt="logo" priority/>
          </div>
          <div className="col-span-2 rounded" data-aos="fade-up">
          <Image src={NewsApp} alt="logo" priority/>
          </div>
          <div className="col-span-2  rounded" data-aos="fade-up">
          <Image src={Kurangguru} alt="logo" priority/>
          </div>
      </div>
    </div>
  );
};

export default Card;
