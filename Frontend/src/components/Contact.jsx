import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/263/636/non_2x/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-dark-blue-background-for-presentation-web-banner-article-business-and-network-connection-and-company-free-vector.jpg"
          alt=""
          className="w-full h-[80vh] object-cover "
        />
        <div className="w-[85%] flex justify-between gap-2 mx-auto my-20">
          <div className="w-[45%]">
            <h1 className="text-5xl">Contact Us</h1>
            <p className="text-md mt-4">
              Have a question, suggestion, or need help planning your dream
              vacation?
            </p>
            <p className="text-md mt-1">
              We're here to help! Fill out the form below or reach us through
              the details provided — and we'll get back to you as soon as
              possible.
            </p>
            <div className="mt-6 space-y-3">
              <h1 className="text-2xl">Get in Touch</h1>
              <p className="text-md mt-4">
                <strong>Email: </strong> support@dreamdestination.com
              </p>
              <p className="text-md">
                <strong>Phone: </strong> +1 (234) 567-8901
              </p>
              <p className="text-md">
                <strong>Office Hours: </strong> Mon–Fri, 9:00 AM – 6:00 PM
              </p>

              <h2 className="text-2xl mt-4">Follow us:</h2>
              <ul className="flex gap-6 mt-4">
                <li>
                  <a href="https://instagram.com">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                      alt=""
                      className="h-8 w-8"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                      alt=""
                      className="h-8 w-8"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                      alt=""
                      className="h-8 w-8"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[50%]">
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
