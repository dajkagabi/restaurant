import React from "react";
import { CONTACT } from "../../constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Contact Us
      </h2>
      <div className="flex flex-col items-center justify-center">
        {CONTACT.map((item, index) => (
          <div key={index} className="flex items-center mb-4 space-x-4">
            {item.key === "address" && (
              <FaMapMarkerAlt className="text-2xl text-yellow-400" />
            )}
            {item.key === "phone" && (
              <FaPhone className="text-2xl text-yellow-400" />
            )}
            {item.key === "email" && (
              <FaEnvelope className="text-2xl text-yellow-400" />
            )}
            <p className="text-lg">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
