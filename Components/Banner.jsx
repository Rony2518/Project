import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="bannerContainer">
      <div className="bannerInfo">
        <span>Make Your </span> <br />
        <span>Style Looks </span> <br />
        <span>Perfect</span>
        <div className="dscription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          voluptate accusantium illum 
        </div>
        <button>Shop Now</button>
      </div>
      <div className="bannerImg">
        <img src="/example.jpg" alt="" />
        <div className="scrollBtn">
        <FaArrowDownLong />
        </div>
      </div>
    </div>
  );
}
