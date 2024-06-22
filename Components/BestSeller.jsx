import React from "react";
import SliderCards from "./SliderCards";
import { data } from "./Main";

export default function BestSeller() {
  return (
    <div>
      <div className="main">
        <h1>Our Best Seller</h1>
        <div className="bestSellerContainer">
          <div className="navigation">
            <li>All</li>
            <li>Leather</li>
            <li>Jean</li>
            <li>Bomber</li>
            <li>Puffer</li>
          </div>
          <div className="ProductConatainer">
            {data.map((d) => (
              <SliderCards d={d} key={d.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
