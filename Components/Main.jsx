import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCards from "./SliderCards";

export const data = [
  {
    id: 1,
    description: "Lady with a red umbrella",
    "image-url":
      "https://i.pinimg.com/564x/dd/63/21/dd632189acb3443ba667031c52dd2403.jpg",
    price: "$200",
  },
  {
    id: 2,
    description: "Flowers and some fruits",
    "image-url":
      "https://i.pinimg.com/564x/62/49/ce/6249cee7364f6e5faecf5863bc226d32.jpg",
    price: "$210",
  },
  {
    id: 3,
    description: "Beautiful scenery",
    "image-url":
      "https://i.pinimg.com/564x/d1/e1/95/d1e1953af470b48367afe606e1f721fe.jpg",
    price: "$250",
  },
  {
    id: 4,
    description: "Some kind of bird",
    "image-url":
      "https://i.pinimg.com/564x/f3/f6/bc/f3f6bc0038e5d2eae7fa31da329d7d02.jpg",
    price: "$260",
  },
  {
    id: 5,
    description: "The attack of dragons",
    "image-url":
      "https://i.pinimg.com/564x/2a/c2/26/2ac22632b10c36a893b703db68971bd1.jpg",
    price: "$280",
  },
  {
    id: 6,
    description: "The attack of dragons",
    "image-url":
      "https://i.pinimg.com/564x/2a/c2/26/2ac22632b10c36a893b703db68971bd1.jpg",
    price: "$270",
  },
];

export default function Main() {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="main">
      <h1>Our Featured Products</h1>
      <div className="ccc">
        <Carousel responsive={responsive} className="w-3/4 m-auto">
          {data.map((d) => (
            <SliderCards d={d} key={d.id} />
          ))}
        </Carousel>
        <img src="/graphic1.png" alt="" />
        <div className="orangeBox"></div>
      </div>
    </div>
  );
}
