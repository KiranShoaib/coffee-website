"use client";
import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import hero1 from "../../public/hero1.png";
import hero2 from "../../public/hero2.png";
import hero3 from "../../public/hero3.png";

function Hero() {
  const [mainImage, setMainImage] = useState<StaticImageData>(hero1); // Use StaticImageData type

  const handleImageClick = (imageSrc: StaticImageData) => {
    setMainImage(imageSrc); // Update the main image
  };

  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>fresh coffee in the morning</h3>
          <Link className="btn" href="/">
            buy one now
          </Link>
        </div>

        <div className="image">
          <Image src={mainImage} alt="coffee mug" className="main-home-image" />
        </div>
      </div>
      <div className="image-slider">
        <Image
          src={hero1}
          alt="coffee mug"
          className="img"
          onClick={() => handleImageClick(hero1)}
        />
        <Image
          src={hero2}
          alt="coffee mug"
          className="img"
          onClick={() => handleImageClick(hero2)}
        />
        <Image
          src={hero3}
          alt="coffee mug"
          className="img"
          onClick={() => handleImageClick(hero3)}
        />
      </div>
    </section>
  );
}

export default Hero;

