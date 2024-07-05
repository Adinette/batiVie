import React from "react";
import { images } from "../app/style/icon";
import SectionTitle from "./SectionTitle";
import Card from "@/component/Card";

export default function SectionProject() {
  const projectCards = [
    {
      iconSrc: images.project1,
      title: "Sanitaire",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.project1,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.project1,
      title: "Cuisine",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
  ];
  return (
    <div className="project">
      <div className="container">
        <SectionTitle title="Projet en vedette" description="" className={""} />
        <div className="row">
          {projectCards.map((card, index) => (
            <div key={index} className={`col-lg-4 `}>
              <Card {...card} customClassName="card-home" />
            </div>
          ))}
          <div className="col-12 mt-3">
            <div className="text-end text-white">
              <a href={""}>Voir tous les services</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
