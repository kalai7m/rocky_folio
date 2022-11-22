import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const contactForm = useRef();
  const [form, setForm] = useState({ fullName: "", email: "", message: "" });
  const [error, setError] = useState({});
  let handleOnChange = (e) => {
    let input = e.target.name;
    let value = e.target.value;
    let tempForm = { ...form };
    if (error[input]) {
      delete error[input];
    }
    tempForm[input] = value;
    setForm(tempForm);
  };
  const validate = () => {
    if (error) {
      setError({});
    }
    let inputField = Object.keys(form);
    const name = {
      fullName: "Full Name",
      email: "e-Mail",
      message: "Message",
    };
    let tempError = { ...error };
    inputField.forEach((input) => {
      let value = form[input];
      if (!value || value.length === 0) {
        tempError[input] = "Please enter your " + name[input];
      }
    });
    setError(tempError);
    return true;
  };
  let handleOnSubmit = (e) => {
    e.preventDefault();
    // validate();
    if (validate()) {
      if (Object.keys(error).length === 0) {
        console.log("Submitted");
        emailjs
          .sendForm(
            "gmail_service_rocky",
            "gmail_template_rocky",
            contactForm.current,
            "5O2-zlYXfF6-pm5wt"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        contactForm.current.reset();
      }
    }
  };
  return (
    <form ref={contactForm} className="py-10 lg:pr-10 flex flex-col space-y-5">
      {/* NAME */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="fullName" className="text-md font-semibold">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Ganesh Kumar"
          onChange={(e) => handleOnChange(e)}
          value={form.fullName}
          className="w-full bg-slate-900 text-grassGreen-300 focus:outline-none p-2 placeholder:italic placeholder:text-slate-500"
        />
        {error && error.fullName && (
          <p className="text-sm !mt-1 text-white">{error.fullName}</p>
        )}
      </div>
      {/* EMAIL */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="email" className="text-md font-semibold">
          Your e-Mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="me@example.com"
          onChange={(e) => handleOnChange(e)}
          value={form.email}
          className="w-full bg-slate-900 text-grassGreen-300 focus:outline-none p-2 placeholder:italic placeholder:text-slate-500"
        />
        {error && error.email && (
          <p className="text-sm !mt-1 text-white">{error.email}</p>
        )}
      </div>
      {/* MESSAGE */}
      <div className="flex flex-col space-y-3">
        <label htmlFor="message" className="text-md font-semibold">
          Your Message
        </label>
        <textarea
          type="message"
          name="message"
          id="message"
          placeholder="Enter your message here..."
          rows="4"
          onChange={(e) => handleOnChange(e)}
          value={form.message}
          className="w-full bg-slate-900 text-grassGreen-300 focus:outline-none p-2 placeholder:italic placeholder:text-slate-500"
        ></textarea>
        {error && error.message && (
          <p className="text-sm !mt-1 text-white">{error.message}</p>
        )}
      </div>
      <input
        type="submit"
        value="Submit"
        onClick={(e) => handleOnSubmit(e)}
        className="cursor-pointer border-2 border-black px-3 font-semibold py-2 w-fit hover:text-grassGreen-300 hover:bg-slate-800"
      />
    </form>
  );
};

export default ContactForm;
