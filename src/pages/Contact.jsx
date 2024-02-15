import React, { useRef } from "react";
import Footer from "../components/Footer";

function Contact() {
  const form = useRef(null);
  const sendEmail = (e) => {};

  return (
    <>
      <div className="bg-[#F4F7FD]">
        <div className="flex max-w-7xl p-3 mx-auto flex-col md:flex-row">
          <div className="max-w-md w-full mx-auto p-6 bg-gray-100 rounded-lg border">
            <h2 className="text-3xl text-center text-purple-600 font-bold mb-6">
              Contact Us
            </h2>
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-black font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  placeholder="ashik"
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
                  required
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-black font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  placeholder="ashik@gmail.com"
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
                  required
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-black font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="type your message here..."
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
                  required
                  type="text"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.728390416138!2d90.3587518092355!3d23.757063178576797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfeaac77cf97%3A0x56e8b5892d7e73df!2sMohammadpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1706814107995!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
