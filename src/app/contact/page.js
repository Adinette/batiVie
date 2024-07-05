import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Banner from "../../component/Banner";

export default function Contact() {
  return (
    <div>
      <Header />
      <Banner title={"Contact"} description={"Nous contacter"} />
      <div className="contact">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div class="contact-content">
              <h4 className="text-center mb-4">Avez-vous une questions?</h4>
              <div class="">
                <form>
                  <div className="d-flex">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control w-100"
                      placeholder="Nom complet"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control w-100 ms-3"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      className="w-100 form-control my-4"
                    />
                  </div>
                  <div>
                    <button type="button" className="btn btn-secondary w-100">Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="contact-content">
              <div class="">
                <h4 class="card-title text-center mb-3">Contact info</h4>
                <div>
                  <ul>
                    <li class="my-3">Adresse</li>
                    <li>Cocotomey Zounga</li>
                    <li class="my-3">Contact rapide</li>
                    <li class="">Email : contact@bativitebenin.com</li>
                    <li class="my-3">Phone : (+229) 96-11-55-25</li>
                    <li>Horaire d'ouverture</li>
                    <li class="my-3">Lundi - Vendredi</li>
                    <li>08H -17H</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
