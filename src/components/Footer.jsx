import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="md:pb-0 pb-4">
          <h6 className="font-bold uppercase pt-2 pl-4 text-gray-100">
            About AWS
          </h6>
          <ul>
            <li className="py-1 hover:underline cursor-pointer">
              Cloud Computing
            </li>
            <li className="py-1 hover:underline cursor-pointer">DevOps</li>
            <li className="py-1 hover:underline cursor-pointer">Data Lake</li>
            <li className="py-1 hover:underline cursor-pointer">
              AWS Cloud Security
            </li>
            <li className="py-1 hover:underline cursor-pointer">What's New</li>
          </ul>
        </div>
        <div className="md:pb-0 pb-4">
          <h6 className="font-bold uppercase pt-2 pl-4 text-gray-100">
            AWS Resources
          </h6>
          <ul>
            <li className="py-1 hover:underline cursor-pointer">
              AWS Solutions
            </li>
            <li className="py-1 hover:underline cursor-pointer">
              Architecture Center
            </li>
            <li className="py-1 hover:underline cursor-pointer">
              Technical FAQs
            </li>
            <li className="py-1 hover:underline cursor-pointer">
              Analyst Reports
            </li>
            <li className="py-1 hover:underline cursor-pointer">
              AWS Partners
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-4 text-gray-100">
            Developers on AWS
          </h6>
          <ul>
            <li className="py-1 hover:underline cursor-pointer">
              Developer Center
            </li>
            <li className="py-1 hover:underline cursor-pointer">
              Python on AWS{" "}
            </li>
            <li className="py-1 hover:underline cursor-pointer">PHP on AWS</li>
            <li className="py-1 hover:underline cursor-pointer">Java on AWS</li>
            <li className="py-1 hover:underline cursor-pointer">
              JavaScript on AWS
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-4 ">AWS-Help</h6>
          <ul className="">
            <li className="py-1 hover:underline cursor-pointer">Contact Us</li>
            <li className="py-1 hover:underline cursor-pointer">
              Knowledge Center
            </li>
            <li className="py-1 hover:underline cursor-pointer">
              AWS Support Overview
            </li>
            <li className="py-1 hover:underline cursor-pointer">Legal</li>
            <li className="py-1 hover:underline cursor-pointer">AWS Careers</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter your email"
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className=" px-2 py-4  flex flex-col max-w-[1240px] mx-auto justify-between sm:flex-row text-center text-gray-600">
        <p>© 2022, AWS-demo , Inc. or its affiliates. All rights reserved.</p>
        <div className="flex justify-between  sm:w-[300px] sm:pt-0 pt-4 text-2xl">
          <FaTwitter />
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
