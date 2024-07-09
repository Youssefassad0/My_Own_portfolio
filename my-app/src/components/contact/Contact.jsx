import React from "react";
import "./contact.css";
function Contact() {
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
        <form>
          <div className="flex" >
            <label htmlFor="email">Email Adress :</label>
            <input
              type="email"
              id="email"
              name="email"
         
              placeholder="Email Adress"
            />
          </div>
          <div  className="flex" style={{ marginTop: "23px" }}  >
            <label htmlFor="message">
              Your Message :
            </label>
            <textarea name="message" id="message" required ></textarea>
          </div>

          <button className="submit" >Send</button>
        </form>

        <div className="animation border">
          animation
        </div>
      </div>
    </section>
  );
}

export default Contact;
