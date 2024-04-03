"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className=" bg-black/[0.90] text-white">
      <div className=" w-full relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative  shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
          <div className="max-w-screen-md mt-36 mb-36">
            <h1 className="font-bold text-xl md:text-5xl text-white mb-4 relative z-50 text-center ">
              Contact Us
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
              We're here to help with any questions about our courses, programs,
              or events. Reach out and let us know how we can assist you in your
              musical journey
            </p>
            <div>
              <form className="my-8">
                <div className="mb-4">
                  <Input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                  />
                </div>
                <div>
                  <Input id="password" placeholder="Your Message" />
                </div>
              </form>
            </div>

            <button
              className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300
             bg-teal-500 hover:bg-teal-700"
            >
              Send Message
            </button>
          </div>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default page;
