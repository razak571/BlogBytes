import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <section className="relative overflow-hidden  py-10 ">
      <div className="relative z-10 mx-auto max-w-7xl px-4 ">
        <div className="-m-6 flex flex-wrap ">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 ">
            <div className="flex h-full flex-col justify-between ">
              <div className="mb-4 inline-flex items-center">
                <Link to={`/`}>
                  <Logo width="100px" color="gray" />
                </Link>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  &copy; Copyright 2024. All Rights Reserved by Razak!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Features
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Affiliate Program
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Press Kit
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Account
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Help
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Customer Support
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" text-base font-medium text-gray-900 hover:text-gray-500"
                    to="/"
                  >
                    Licensing
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
