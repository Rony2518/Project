import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

export default function ProductCards({ d }) {
  return (
    <div className="card" key={d.id}>
      <div className="cardImg">
        <img src={d["image-url"]} alt="" />
      </div>
      <div className="productInfo">
        <span>{d.description}</span>
        <div className="moreProductInfo">
          <span className="price">{d.price}</span>
          <div className="moreProductOptions">
            <span>See More</span>
            <div className="options">
              <FaEllipsisVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
