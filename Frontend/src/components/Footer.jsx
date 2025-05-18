import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-900 text-white py-20">
        <div className="w-[85%] mx-auto flex gap-5 items-start justify-between">
          <div className="flex flex-col w-[35%] gap-5">
            <img
              alt="Your Company"
              src="https://www.dreamdestinationholidays.in/images/logo.png"
              className="h-15 w-fit"
            />
            <p className="text-md text-gray-400 w-full">
              Dream Destination is your all-in-one platform for exploring the
              most breathtaking travel experiences around the globe. Whether
              you're planning a tropical escape, a cultural adventure, or a
              peaceful retreat in the mountains, Dream Destination helps you
              discover, plan, and visualize your perfect journey.
            </p>
          </div>
          <div className="text-white w-[35%] flex items-center flex-col gap-3">
            <h1 className="text-2xl font-bold">Quick Links :</h1>
            <ul className="flex flex-col gap-4 text-lg mt-3">
              <li>Contact</li>
              <li>About</li>
              <li>Help</li>
              <li>Customer care</li>
            </ul>
          </div>

          <div className="w-[35%] flex flex-col items-center">
            <span>
              <span className="text-2xl font-bold ">Follow us on:</span>
              <span className="flex gap-6 mt-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt=""
                  className="h-8 w-8"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                  alt=""
                  className="h-8 w-8"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt=""
                  className="h-8 w-8"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
