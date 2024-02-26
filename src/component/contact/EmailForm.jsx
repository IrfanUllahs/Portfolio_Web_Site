import React, { useState } from "react";
import emailjs from "emailjs-com";

import emailValidator from "email-validator";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;
const EmailForm = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate sender's email
    if (!emailValidator.validate(senderEmail)) {
      console.error("Invalid email address");
      return; // Stop execution if email is invalid
    }

    // Validate email body
    if (!body.trim()) {
      console.error("Email body cannot be empty");
      return; // Stop execution if body is empty
    }

    // Send email using emailjs
    console.log(serviceId, templateId, userId);
    emailjs
      .send(serviceId, templateId, { subject, body, senderEmail }, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full focus:outline-none focus:border-none "
    >
      <input
        className="bg-transparent border-[3px] border-colorbgvariant focus:border-gray-400 rounded-xl pl-2 h-[70px] focus:outline-none "
        type="text"
        placeholder="Your Full Name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        className="bg-transparent border-[3px] border-colorbgvariant focus:border-gray-400 rounded-xl pl-2 h-[120px] pt-3 focus:outline-none"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter Your Message"
      />

      <input
        className="bg-transparent border-[3px] border-colorbgvariant focus:border-gray-400 rounded-xl pl-2 h-[70px] focus:outline-none"
        type="email"
        placeholder="Your Email"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
      />

      <p className="border-colorprimary border-2 px-4 py-2 rounded-md bg-colorprimary text-colorbgvariant max-w-[160px] ">
        <button type="submit"> Send Message</button>
      </p>
    </form>
  );
};

export default EmailForm;
