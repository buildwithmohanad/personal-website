import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hriw8u7",
        "template_83hqglg",
        form.current,
        "SgV9IZ_P7MJQMaEAN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset()
  };
  return (
    <section className="contact">
        <h2>contact form</h2>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" id="submitBtn" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
