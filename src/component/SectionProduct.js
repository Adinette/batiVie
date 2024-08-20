"use client";

import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Link from "next/link";
import { images } from "../app/style/icon";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function SectionProduct() {
  return (
    <div className="product">
      <SectionTitle
        title="NOS PRODUITS QUINCAILLERIE"
        description=""
        className={"text-center text-white"}
      />
      <div className="container">
        <TabView>
          <TabPanel header="SANITAIRE" className="col text-center">
            <div className="row">
              <div className="col-lg-6">
                <Image src={images.project1} alt="product" />
              </div>
              <div className="col-lg-6 product-tab">
                <div className="product-content text-start">
                  <h3>Sanitaire</h3>
                  <h6 className="">Venez à la rencontre des plus grandes marques de sanitaires
                    et d’accessoires de salle de bains exposées dans notre
                    showroom.Nos conseillers de ventes sont à votre disposition.</h6>
                    <Link href={"/product"} className="">
                    En savoir plus
                    <Image src={images.vector} alt="vector" className="ms-3" />
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="OUTILLAGE" className="col text-center">
            <div className="row mt-5">
              <div className="col-lg-6">
                <Image src={images.project1} alt="product" />
              </div>
              <div className="col-lg-6">
                <div className="product-content text-start">
                  <h3>Outillage</h3>
                  <p>Description détaillée du outillage...</p>
                  <Link href={"/product"} className="">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            header="PLOMBERIE ET ROBINETTERIE"
            className="col text-center"
          >
            <div className="row mt-5">
              <div className="col-lg-6">
                <Image src={images.project1} alt="product" />
              </div>
              <div className="col-lg-6">
                <div className="product-content text-start">
                  <h3>Plomberie et robinetterie</h3>
                  <p>Description détaillée du plomberie et robinetterie...</p>
                  <Link href={"/product"} className="">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            header="QUINCAILLERIE ET SECURITE"
            className="col text-center"
          >
            <div className="row mt-5">
              <div className="col-lg-6">
                <Image src={images.project1} alt="product" />
              </div>
              <div className="col-lg-6">
                <div className="product-content text-start">
                  <h3>Quincaillerie et sécurité</h3>
                  <p>Description détaillée du Quincaillerie et sécurité...</p>
                  <Link href={"/product"} className="">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="CARRELAGE" className="col text-center">
            <div className="row mt-5">
              <div className="col-lg-6">
                <Image src={images.project1} alt="product" />
              </div>
              <div className="col-lg-6">
                <div className="product-content text-start">
                  <h3>CARRELAGE</h3>
                  <p>Description détaillée du Carrelage...</p>
                  <Link href={"/product"} className="">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="SANITAIRE" className="col text-center">
            <div className="row">
              <div className="col-lg-6">
                <Image src={images.project1} alt="product" />
              </div>
              <div className="col-lg-6 product-tab">
                <div className="product-content text-start">
                  <h3>Sanitaire</h3>
                  <p>Description détaillée du sanitaire...</p>
                  <Link href={"/product"} className="">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}