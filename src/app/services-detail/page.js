import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "@/component/Banner";
import Card from "@/component/Card";
import { images } from "../style/icon";
import Link from "next/link";
import Breadcrumb from "@/component/Breadcrumb";
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
      <Breadcrumb
        className=""
        content={[
          { label: "Home", url: "/home" },
          { label: "Services", url: "" },
          { label: "Location", url: "" },
        ]}
      />
      <div className="service-detail">
        <div className="container">
          <div className="row">
            <div className="col-6 me-auto">
              <div className="text-start ps-5">
                <h2>LOCATION D’ENGINS</h2>
                <span class="banner-text">
                  NOUS METTONS A VOTRE DISPOSITION DES ENGINS DE QUALITE POUR
                  TOUT TRAVEAUX DE BTP{" "}
                </span>
              </div>
                <ul className="service-detail-list">
                  <li className="service-detail-list-item">Chargeuses (Chargeurs)</li>
                  <li className="service-detail-list-item">Chargeuses (Chargeurs)</li>
                  <li className="service-detail-list-item">Chargeuses (Chargeurs)</li>
                  <li className="service-detail-list-item">Chargeuses (Chargeurs)</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
