// Contact Component: Contact.jsx
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import SubmitIcon from "../Media/submit-icon.mp4";

export default function Contact() {

  const form = useRef();
  const [inputState, setInputState] = React.useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const handleInput = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3gpvq4s',
      'template_gufjkli',
      form.current,
      '7k7F6cAIcTP3eu0_f'
    ).then((result) => {
      e.target.reset();
      setInputState({
        Name: "",
        Email: "",
        Message: ""
      });
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <>
      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}>
        <motion.div class="login-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}>
          <h2>
            Buzz
            <p className="ms-2">Me</p>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div class="user-box">
              <input
                type="text"
                name="Name"
                onChange={handleInput}
                autoComplete="off"
                required />
              <label>Full Name</label>
            </div>
            <div class="user-box">
              <input
                type="email"
                name="Email"
                onChange={handleInput}
                autoComplete="off"
                required />
              <label>Email</label>
            </div>
            <div class="user-box">
              <textarea
                type="text"
                name="Message"
                onChange={handleInput}
                autoComplete="off"
                required>
              </textarea>
              <label>Message</label>
            </div>
            <div className="text-center">
              {
                inputState.Name !== "" && inputState.Email !== "" && inputState.Email.includes("@") && inputState.Message !== ""
                  ? <button
                    type="submit"
                    value="Send"
                    data-bs-toggle="modal"
                    data-bs-target="#submitModal">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </button>
                  : <button
                    type="submit"
                    value="Send">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                  </button>
              }
            </div>
          </form>
        </motion.div>
        <div class="modal fade"
          id="submitModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header justify-content-center">
                <video
                  src={SubmitIcon}
                  width="150px"
                  loop muted autoPlay>
                  submit-icon.mp4
                </video>
              </div>
              <div class="modal-body d-flex align-items-center justify-content-center">
                <h2 className="text-white">Email have been successfully sent to Adarsh.</h2>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="modal-done-btn"
                  data-bs-dismiss="modal">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};