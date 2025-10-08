"use client";
import Image from "next/image";
import React from "react";

function Footer() {
  const text = [
    "About",
    "Recipes",
    "Support",
    "Products",
    "Store Locator",
    "Privacy Policy",
    "Blogs",
    "Health Benefits",
    "Terms of Services",
  ];
  const icon = ["f", "insta", "x", "yt", "in"];
  return (
    <div className="container mx-auto px-6 py-2 md:px-16 w-full  text-white">
      <div>
        <div className="flex justify-between ">
          <div>
            <Image
              className=" -ml-2"
              src="/logo.png"
              alt=""
              height={120}
              width={104}
            />
            <div className="flex flex-col ">
              <small className="font-normal text-2xl">
                Join the fitness movement
              </small>
              <span className="font-light text-lg">
                Sign up to stay updated
              </span>
            </div>
            <div className="flex items-center justify-between text-white mt-5 border-b pb-2">
              <input
                className="font-light text-sm text-white placeholder:text-white outline-none"
                type="email"
                name=""
                id=""
                placeholder="Email address"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={12}
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  d="M8.146 3.147a.5.5 0 0 1 .63-.065l.078.065l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 1 1-.708-.707L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854l-.064-.078a.5.5 0 0 1 .064-.63"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3  gap-7">
              {text.map((e) => (
                <small key={e} className="text-xl font-light ">
                  {e}
                </small>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-14 pb-16">
          <small className="text-[#E9E9E9]">
            Copyright © 2025 IndiaGate Foods | All Rights Reserved
          </small>
          <div className="flex gap-5 items-center">
            <div className="bg-white w-9 h-9 rounded-md flex justify-center items-center">
              <Image className="" src={`f.svg`} alt="" height={15} width={8} />
            </div>
            <div className="bg-white w-9 h-9 rounded-md flex justify-center items-center">
              <Image
                className=""
                src={`insta.svg`}
                alt=""
                height={15}
                width={15}
              />
            </div>
            <div className="bg-white w-9 h-9 rounded-md flex justify-center items-center">
              <Image className="" src={`x.svg`} alt="" height={13} width={16} />
            </div>
            <div className="bg-white w-9 h-9 rounded-md flex justify-center items-center">
              <Image
                className=""
                src={`yt.svg`}
                alt=""
                height={10}
                width={15}
              />
            </div>
            <div className="bg-white w-9 h-9 rounded-md flex justify-center items-center">
              <Image
                className=""
                src={`in.svg`}
                alt=""
                height={14}
                width={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
