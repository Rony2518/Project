import React from "react";

export default function CompanyInfo() {
  return (
    <div className="CompanyInfoContainer">
      <div className="con">
        <div className="BestSellerImg">
          <img src="/blueGraphic3.png" alt="" className="graphic"/>
          <img src="/bestSeller.jpg" alt="" className="mainImg"/>
          <button>Explore Now</button>
        </div>
        <div className="Info">
          <div className="heading">
            <h1>
              Best Fashion <br /> Brand
            </h1>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            error nostrum quod mollitia, quaerat eligendi! Recusandae, quia
            nesciunt sequi mollitia minima quisquam at ducimus amet quod.
            Consequatur temporibus est nam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Itaque Lorem ipsum dolor sit.
          </p>
          <div className="BoxContainer">
            <div className="box">
              <span className="achivementCount">250+ </span>
              <span className="achivementDes">Store Branches</span>
            </div>
            <div
              className="box"
              style={{ backgroundColor: "#FF5733", color: "white" }}
            >
              <span className="achivementCount">7000+ </span>
              <span className="achivementDes">Product Sold</span>
            </div>
            <div className="box">
              <span className="achivementCount">3900+ </span>
              <span className="achivementDes">5 star Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
