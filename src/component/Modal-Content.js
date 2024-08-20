import React from "react";

export default function ModalContent({}) {
  return (
    <div class="modal-register">
      <span className="text-center fw-medium">
        Un contrôle complet sur les produits nous permet d’offrir à nos clients
        la meilleure qualité prix et prestations. Nous sommes très fiers de tout
        ce que nous faisons chez BATI VITE - BENIN
      </span>
      <div class="mt-4">
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
          <div className="d-flex mt-4">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control w-100"
              placeholder="Télephone"
            />
            <select id="email" name="email" className="form-control w-100 ms-3">
              <option>Selectionner le service</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
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
            <button type="button" className="btn btn-secondary w-100">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
