import React from "react";
import { SectionHeading } from "./micro/sectionHeading";
import contactMe from "../assets/contact/contact.svg";
import ContactForm from "./micro/contactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-darkBlack py-8 px-8">
      <SectionHeading
        heading={"Contact Me"}
        subHeading={"I AM HERE FOR YOU"}
        cls={"pb-4"}
      />
      <div className="md:max-w-[1240px] mx-auto bg-gradient-to-br from-grassGreen-400 to-grassGreen-100 p-6 sm:px-20 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="order-last lg:order-first">
          <h2 className="font-bold text-xl text-center lg:text-left sm:text-2xl md:text-3xl">
            Send Me a Message
          </h2>
          <ContactForm />
        </div>
        <div className="flex flex-col space-y-10 justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold  text-xl sm:text-2xl md:text-3xl">
              Let's chat. Tell me about your project.
            </h1>
            <p className="font-semibold text-md sm:text-xl mt-6">
              Let's create wonders together !
            </p>
          </div>
          <div className="flex justify-center">
            <img src={contactMe} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
