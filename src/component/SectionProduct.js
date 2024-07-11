"use client";
import React, { useState } from "react";
import { images } from "../app/style/icon";
import Image from "next/image";

import SectionTitle from "./SectionTitle";

export default function SectionProduct() {
  const productCards = [
    {
      iconSrc: images.product1,
      title: "Sanitaire",
      description: "",
      detailIcon: images.product_detail,
      detailDescription: "Description détaillée du sanitaire...",
    },

    {
      iconSrc: images.product1,
      title: "Sanitaire",
      description: "",
      detailIcon: images.product_detail,
      detailDescription: "Description détaillée du sanitaire...",
    },

    {
      iconSrc: images.product1,
      title: "Sanitaire",
      description: "",
      detailIcon: images.product_detail,
      detailDescription: "Description détaillée du sanitaire...",
    },

    {
      iconSrc: images.product1,
      title: "Sanitaire",
      description: "",
      detailIcon: images.product_detail,
      detailDescription: "Description détaillée du sanitaire...",
    },
    {
      iconSrc: images.product1,
      title: "Sanitaire",
      description: "",
      detailIcon: images.product_detail,
      detailDescription: "Description détaillée du sanitaire...",
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <div className="products">
      <div className="container">
        <SectionTitle
          title="Nos produits quincaillerie"
          description=""
          className={"text-center"}
        />
        <div className="row">
          {productCards.map((card, index) => (
            <div className="col" key={index}>
              <Card
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
                onClick={() => handleCardClick(index)}
                isSelected={selectedCardIndex === index}
                detailIcon={card.detailIcon}
                detailDescription={card.detailDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({
  iconSrc,
  title,
  description,
  onClick,
  isSelected,
  detailIcon,
  detailDescription,
}) {
  return (
    <>
      <div
        className="card bg-transparent text-white border-0 home"
        onClick={onClick}
      >
        <Image src={iconSrc} alt="product" />
        <div className="card-body">
          <h4 className="card-title mb-3">{title}</h4>
          <p className="card-text text-white">{description}</p>
        </div>
      </div>
      {isSelected && (
        <div className="row">
          <div className="col-lg-6">
            <Image src={detailIcon} alt="detail" />
          </div>
          <div className="col-lg-6">
            <h3>{title}</h3>
            <p>{detailDescription}</p>
          </div>
        </div>
      )}
    </>
  );
}
