export default function Form() {
  return (
    <div className="col-lg-7">
      <div class="contact-content">
        <h4 className="text-center mb-5">Avez-vous une questions?</h4>
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
              <button type="button" className="btn btn-secondary w-100">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
