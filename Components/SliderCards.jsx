import React from 'react'

export default function SliderCards({ d }) {
  return (
    <div className="sliderCard" key={d.id}>
      <div className="sliderCardImg">
        <img src={d["image-url"]} alt="" />
      </div>
      <div className="SliderProductInfo">
        <span>{d.description}</span>
        <span className='price'>{d.price}</span>
      </div>
    </div>
  )
}
