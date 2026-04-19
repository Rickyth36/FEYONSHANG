import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div className="">
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            FEYONSHANG is dedicated to bringing you modern fashion that blends
            style, comfort and quality. From everyday essentials to statement
            pieces, our collections are designed to help you express your
            individuality with confidence
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/about")}>
              About us
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/orders")}>
              Delivery
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/contact")}>
              Contact
            </li>
            {/* <li>Privacy Policy</li> */}
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1234567890</li>
            <li>contact@feyonshang.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()}@feyonshang.com. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
