import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // setting the state in the variable
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      // setting the emailJs on the input
      .sendForm(
        "service_rpvi6up",
        "template_x4bkldj",
        form.current,
        "n64fv2qYMz0pHV6dZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // vider les input
    setName("");
    setMessage("");
    setEmail("");
  };
  return (
    <div>
      <div id="Contact" className=" lg:flex mx-auto mt-20 py-20 justify-center">
        <div className="lg:w-[40%] md:w-[80%] w-[85%] md:mx-auto mx-auto lg:mr-20">
          <h2 className="text-silver dark:text-darkGray text-center text-4xl mb-[50px]">
            Get In Touch
          </h2>
          <p className="text-silver dark:text-darkGray font-bold text-lg leading-10 text-justify">
            As a web developer, I specialize in creating innovative and
            user-friendly websites and web applications. I have a passion for
            coding and design, and I'm constantly learning and staying
            up-to-date with the latest technologies and trends. If you're in
            need of a new website or web application, or if you have any
            questions about how I can help bring your digital vision to life,
            please don't hesitate to get in touch. I'm always happy to discuss
            your project and see how we can work together.
          </p>
        </div>
        <div className="lg:w-[40%] md:w-[80%] md:mx-auto mt-10 ">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              onChange={handleName}
              value={name}
              className="block bg-silver dark:bg-darkGray dark:text-silver text-darkGray outline-none px-4 text-lg font-semibold rounded-md py-2 w-[80%] mt-5 mx-auto"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              className="block bg-silver dark:bg-darkGray dark:text-silver text-darkGray outline-none px-4 text-lg font-semibold rounded-md py-2 w-[80%] mt-5 mx-auto"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={handleMessage}
              className="block h-40 bg-silver dark:bg-darkGray dark:text-silver text-darkGray outline-none px-4 text-lg font-semibold rounded-md py-2 w-[80%] mt-5 mx-auto"
            />
            <button
              type="submit"
              className="block dark:bg-[#90909082] dark:text-darkGray font-semibold dark:hover:border-darkGray  bg-[#44403c] text-silver py-2 px-5 rounded-full borde-1 border border-transparent  mt-5 mx-auto hover:scale-110 transition-all duration-300 hover:border-[#abbaab]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className=" w-[100%] text-center dark:bg-darkGray bg-silver py-[20px]">
        <h4 className="text-md py-2 dark:text-silver text-darkGray font-semibold">
          Made with
        </h4>
        <h2 className="text-2xl pb-2 dark:text-silver text-darkGray font-semibold">
          React Js
        </h2>
        <div className="md:hidden ">
          <a
            className=" hover:text-[#0077b0] transition-all duration-300 ease-in-out px-5 dark:hover:text-[#0077b0] dark:text-silver text-darkGray my-3 text-[25px]"
            href="https://www.linkedin.com/in/yassine-mghazli-2ab274251/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>{" "}
          </a>
          <a
            className=" hover:text-[#7b2586] transition-all duration-300 ease-in-out px-5 dark:hover:text-[#7b2586] dark:text-silver text-darkGray my-3 text-[25px]"
            href="https://github.com/Yassine-MG"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="hover:text-[#cd216e] transition-all duration-300 ease-in-out px-5 dark:hover:text-[#cd216e] dark:text-silver text-darkGray my-3 text-[25px]"
            href="https://www.instagram.com/yassine_mghazli/"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            className="hover:text-[#2ba5da] transition-all duration-300 ease-in-out px-5 dark:hover:text-[#2ba5da] dark:text-silver text-darkGray my-3 text-[25px]"
            href="https://twitter.com/YassineMghazli"
            target="_blank"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <div className="fixed bottom-0 right-0 mr-5 mb-5 ">
          <a href="#">
            <i className="fa-solid fa-chevron-up transition duration-200 hover:scale-110 hover:bg-[#90909082] bg-orange p-3 text-xs rounded-full hidden md:block"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
