import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("meojqyyk");
  if (state.succeeded) {
alert("thanks for meesage me ")}
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"></span>
        Contact Me
      </h1>
      <p className="sub-title">
        Contact Me For More Information and Get Notified
      </p>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Adress :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Adress"
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "23px" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting} >Send</button>
        </form>

        <div className="animation border">animation</div>
      </div>
    </section>
  );
}

export default Contact;
