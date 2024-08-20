import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../../component/Banner";
import ContactForm from "../../component/Contact";
import Breadcrumb from "../../component/Breadcrumb";


export default function Contact() {
  return (
    <div>
      <Header />
      <Banner title={"Contact"} description={"Nous contacter"} />
      <Breadcrumb
        className=""
        content={[
          { label: "Home", url: '/home' },
          { label: "Contact", url: ''},
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
