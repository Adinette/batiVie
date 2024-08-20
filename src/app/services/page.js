import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../../component/Banner";
import Card from "../../component/Card";
import { images } from "../style/icon";
import Link from "next/link";
import Breadcrumb from "../../component/Breadcrumb";
import Image from "next/image";


export default function Service() {
  const servicesCards = [
    {
      iconSrc: images.service1,
      title: "",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service2,
      title: "",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
    {
      iconSrc: images.service3,
      title: "",
      description: "Venez à la rencontre des plus grande marque de sanitaire",
    },
  ];

  return (
    <div>
      <Header />
      <Banner
        title={"Nos services"}
        description={"Nous proposons une variété de services"}
      />
        <Breadcrumb
        className=""
        content={[
          { label: "Home", url: '/home' },
          { label: "Services", url: ''},
        ]}
      />
      <div className="services">
        <div className="container">
          <div className="row">
            {servicesCards.map((card, index) => (
              <div key={index} className={`col-lg-4 position-relative `}>
                <Card {...card} customClassName="card-service" />
              </div>
            ))}
            <div className="col-12 mt-3">
              <div className="text-center text-white">
                <Link href={"/services-detail"}>Voir tous les services<Image src={images.serviceVector} alt="vector" className="ms-3"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
