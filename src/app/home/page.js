import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import Image from "next/image";
import { images } from "../style/icon";
import SectionProduct from "@/component/SectionProduct";
import SectionProject from "@/component/SectionProject";
import { Steps } from "primereact/steps";

export default function Home() {
  const items = [
    {
      label: "Personal Info",
    },
    {
      label: "Reservation",
    },
    {
      label: "Review",
    },
  ];

  return (
    <div className="home">
      <Header />
      <div className="home_bg pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 text-center text-white">
              <h1>
                Ensemble batissons notre<h1 className="h1">Demeure</h1>
              </h1>
              <p>
                Votre satisfaction est notre priorité. Nous travaillons en
                etroite collaboration avec vous pour comprendre vos attentes et
                surpasser vos espérances
              </p>
              <div className="d-flex align-item-center justify-content-center">
                <div>
                  <button className="btn btn-primary me-4" type="button">
                    Nos services
                  </button>
                </div>
                <div>
                  <button className="btn btn-outline-primary" type="button">
                    Voir Projet
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-lg-5">
              <div className="home-listing">
                <ul>
                  <li>Nous fournissons un services de qualité</li>
                  <li className="my-2">
                    Nous fournissons un services de qualité
                  </li>
                  <li>Nous fournissons un services de qualité</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-experience d-flex">
            <div className="col-lg-6 d-flex">
              <div className="home-experience-item">
                <h4>05+</h4> <span>ans d’experience</span>
              </div>
              <div className="home-experience-item mx-3">
                <h4>05+</h4> <span>ans d’experience</span>
              </div>
              <div className="home-experience-item">
                <h4>05+</h4> <span>ans d’experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Image src={images.experience_bg} alt="experience" />
            </div>
            <div className="col-lg-7">
              <div className="experience-text">
                <h2>
                  05 ans <h2 className="text-white">d’expérience</h2>
                </h2>
                <p>
                  Nous disposons d`une équipe de professionnels expérimentés qui
                  œuvrent dans l’industrie depuis plus de 05 ans. Nos
                  entrepreneurs possèdent une richesse de connaissances et de
                  compétences qu’ils ont acquises au fil des années, ce qui en
                  fait des experts dans leur domaine.
                </p>
                <p>
                  Avec 05 ans d’expérience, nos entrepreneurs ont une
                  compréhension approfondie des normes et réglementations de
                  l’industrie. Nous ve illons à ce que tous nos projets soient
                  conformes aux derniers codes de sécurité et de construction et
                  que le produit final réponde ou dépasse les attentes de nos
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <Steps model={items} />
      </div>
      <SectionProject />
      <SectionProduct />
      <div className="testimonials">
        <div className="container py-4">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2>Témoignages</h2>
              <p>
                Je suis très satisfait des prestations. Leur équipe est très
                professionnelle et efficace pour réaliser notre projet dans les
                délais et à un coût très abordable. La qualité de leur travail
                est très bonne et je recommande vivement cette entreprise pour
                tout projet de construction.
              </p>
              <h5>Tom DeLonge</h5>
              <p>CEO, Lexmark</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
