"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

function TestimonialCart() {
  return (
    <div className="h-[32rem] sm:h-[40rem]  w-full dark:bg-black bg-neutral-950   dark:bg-grid-nbg-neutral-950/[0.2] bg-grid-gray-400/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 bg-opacity-0 flex items-center justify-center dark:bg-black bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-nbg-neutral-950/[0.05] items-center justify-center relative overflow-hidden">
        <h1
          className="mt-20 md:mt-0 mb-5 text-3xl md:text-4xl  mx-auto text-center font-bold bg-clip-text text-transparent 
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Hear Our Harmony: Voices of Success
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
    //
  );
}

export default TestimonialCart;
