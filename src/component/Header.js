"use client";
import Image from "next/image";
import { images } from "../app/style/icon";
import React, { useState } from "react";
import { HeaderItem } from "./HeaderItem";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import ModalContent from "./Modal-Content";

export default function Header({}) {
  const [visible, setVisible] = useState(false);

  const HeaderItems = [
    {
      title: "Acceuil",
      url: "/home",
    },
    {
      title: "Produits",
      url: "/produit",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "A propos",
      url: "/about",
    },
  ];
  return (
    <header class={""}>
      <nav class="navbar navbar-expand-lg p-3">
        <div class="container">
          <a class="navbar-brand py-0 me-0" href="#">
            <Image src={images.logo} alt="logo" width={200} height={60} />
          </a>
          <div
            className={`collapse navbar-collapse justify-content-center`}
            id="navbarSupportedContent"
          >
            <ul class="nav nav-underline">
              {HeaderItems.map((card, index) => (
                <HeaderItem key={index} {...card} className="" />
              ))}
            </ul>
          </div>
          <div>
            <div className="">
              <Button
                className="btn btn-primary"
                label="Demander un devis"
                icon="pi pi-external-link"
                onClick={() => setVisible(true)}
              />
              <Dialog
                header="DEMANDER UN DEVIS"
                visible={visible}
                modal={false}
                style={{
                  width: "50vw",
                  backgroundColor: "#fab341",
                  padding: 40,
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 16,
                  borderRadius:16
                }}
                onHide={() => {
                  if (!visible) return;
                  setVisible(false);
                }}
              >
                <ModalContent />
              </Dialog>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
