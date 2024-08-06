import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "@/component/Banner";
import Card from "@/component/Card";
import { images } from "../style/icon";
import Breadcrumb from "@/component/Breadcrumb";

export default function Produit() {
  const projectCards = [
    {
      iconSrc: images.service1,
      title: "Sanitaire",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service2,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service3,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service2,
      title: "Sanitaire",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service3,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service1,
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
       <Breadcrumb
        className=""
        content={[
          { label: "Home", url: '/home' },
          { label: "Produit", url: ''},
        ]}
      />
      <div className="card-project pb-0">
        <div className="container">
          <div className="row">
            {projectCards.map((card, index) => (
              <div key={index} className={`col-lg-4 mb-5`}>
                <Card {...card} customClassName="py-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
