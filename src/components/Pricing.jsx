import React from "react";

import { CheckIcon, XIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div name="pricing" className=" w-full text-white my-24 ">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay "></div>
      <div className=" max-w-[1240px] mx-auto py-12 ">
        <div className="text-center py-8 text-slate-300">
          <h2 className=" text-4xl text-slate-200  uppercase">Pricing</h2>
          <h2 className="text-5xl font-bold text-white py-8">
            The right price for your research
          </h2>
          <p className=" text-3xl">
            With AWS, you pay only for the individual services you need for as
            long as you use them without requiring long-term contracts or
            complex licensing
          </p>
        </div>
        <div className=" grid md:grid-cols-2  ">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative ">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Basic
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $69
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /Year
                </span>
              </p>
            </div>
            <p className=" text-2xl py-8 text-slate-500">
              AWS Free Tier includes offers that are always free, offers that
              expire 12 months following sign up, and short-term free trial
              offers
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                Virtual Servers in the Cloud
              </p>
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                Scalable Storage in Cloud
              </p>
              <p className="flex py-4">
                <XIcon className=" w-8 mr-5 text-red-600" />
                Isolated Cloud Resources
              </p>
              <p className="flex py-4">
                <XIcon className=" w-8 mr-5 text-red-600" />
                High Performance Database
              </p>
              <p className="flex py-4">
                <XIcon className=" w-8 mr-5 text-red-600" />
                In-memory Caching System
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative ">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $69
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /Month
                </span>
              </p>
            </div>
            <p className=" text-2xl py-8 text-slate-500">
              AWS Free Tier includes offers that are always free, offers that
              expire 12 months following sign up, and short-term free trial
              offers
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                Virtual Servers in the Cloud
              </p>
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                Scalable Storage in Cloud
              </p>
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                Isolated Cloud Resources
              </p>
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                High Performance Database
              </p>
              <p className="flex py-4">
                <CheckIcon className=" w-8 mr-5 text-green-500" />
                In-memory Caching System
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
