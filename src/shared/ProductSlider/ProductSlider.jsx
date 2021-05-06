// // import css file
import "./ProductSlider.scss";
// // import img
import images from "./images";

import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const ProductSlider = () => {
  const image = images.map((size) => ({
    src: size.img,
    sizes: "(max-width: 1000px) 400px, (max-width: 2000px) 500px, 400px",
    alt: `product-img`,
    thumbnail: size.img,
  }));

  return (
    <div className="product-slider">
      <Carousel images={image} />
    </div>
  );
};

export default ProductSlider;
