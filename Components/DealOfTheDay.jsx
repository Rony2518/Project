import React from "react";
import Footer from "./Footer";
export default function DealOfTheDay() {
  return (
    <div className="CompanyInfoContainer" style={{margin:0}}>
      <div className="con">
        <div className="Info">
          <div className="heading">
            <h1>Deal Of The Day</h1>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            error nostrum quod mollitia,
          </p>
          <div className="BoxContainer">
            <div className="box smallBox highlight">
              <span className="achivementCount">03</span>
              <span className="achivementDes">Day</span>
            </div>
            <div className="box smallBox highlight">
              <span className="achivementCount">08</span>
              <span className="achivementDes">Hour</span>
            </div>
            <div className="box smallBox highlight">
              <span className="achivementCount">09</span>
              <span className="achivementDes">Minute</span>
            </div>
          </div>
          <button>Shop Now</button>
        </div>
        <div className="BestSellerImg">
          <img src="/blueGraphic3.png" alt="" className="graphic" />
          <img src="/blueGraphic3.png" alt="" className="graphic" />
          <img src="/deal of the Day.jpg" alt="" className="mainImg" />
        </div>
      </div>
    </div>
  );
}
