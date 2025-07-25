"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";

function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
     <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Contact Us
      </h1>

      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        We&apos;re here to help with any questions about our courses, programs,
        or events. Reach out and let us know how we can assist you in your
        musical journey.
      </p>

      <form className="flex flex-col items-center mt-8">
        <input
          type="text"
          placeholder="enter email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500   relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          placeholder="enter your message"
          className="border border-gray-300 rounded-md p-2 mt-4"
          rows={5}
          maxLength={500}
        />
      </form>
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />
      <Meteors number={20} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}

export default Contact;
