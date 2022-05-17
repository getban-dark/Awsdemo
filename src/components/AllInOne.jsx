import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All In One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Explore Our Solutions
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Advertising & Marketing</h3>
              <p className="text-lg pt-2 pb-4">
                Achieve cost-efficiency for petabyte-scale analytics and
                single-digit millisecond latency workloads.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Financial Services</h3>
              <p className="text-lg pt-2 pb-4">
                Less cost. More resiliency. Explore AWS solutions across
                banking, payments, capital markets, and insurance.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Game Tech</h3>
              <p className="text-lg pt-2 pb-4">
                Create computationally ridiculous games across all genres and
                platforms.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Media & Entertainment</h3>
              <p className="text-lg pt-2 pb-4">
                From content creation to distribution, purpose-built media
                solutions so you can move faster, smarter, and more efficiently.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Analytics & Data Lakes</h3>
              <p className="text-lg pt-2 pb-4">
                Securely store, categorize, and analyze all your data in one,
                centralized repository.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Machine Learning</h3>
              <p className="text-lg pt-2 pb-4">
                Build with powerful services and platforms, and the broadest
                machine learning framework support anywhere.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Serverless Computing</h3>
              <p className="text-lg pt-2 pb-4">
                Build and run applications and services without thinking about
                servers.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Storage</h3>
              <p className="text-lg pt-2 pb-4">
                Durable, cost-effective options for backup, disaster recovery,
                and data archiving at petabyte scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
