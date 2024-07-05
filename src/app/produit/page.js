import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "@/component/Banner";
import Card from "@/component/Card";
import { images } from "../style/icon";

export default function Produit() {
  const projectCards = [
    {
      iconSrc: images.banner_bg,
      title: "Sanitaire",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.banner_bg,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.banner_bg,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.banner_bg,
      title: "Sanitaire",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.banner_bg,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.banner_bg,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
  ];

  return (
    <>
      <Header />
      <Banner
        title={"Nos produits"}
        description={"Nous proposons une variété de services"}
      />
      <div className="card-project">
        <div className="container">
          <div className="row">
            {projectCards.map((card, index) => (
              <div key={index} className={`col-lg-4 mb-3`}>
                <Card {...card} customClassName="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
