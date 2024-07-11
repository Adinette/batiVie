import Form from "./Form";
import Location from "./Location";

export default function ContactForm() {

    return(
        <div className="contact">
        <div className="container py-5">
          <div className="row">
            <Form/>
            <Location/>
          </div>
        </div>
        </div>
    )
}