"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcommingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Guitar Improvisation Basics",
      description:
        "Learn how to improvise confidently on your guitar using scales and progressions.",
      slug: "guitar-improvisation-basics",
      isFeatured: true,
    },
    {
      title: "Mastering Piano Chords",
      description:
        "Explore piano chord theory and learn how to play complex progressions.",
      slug: "mastering-piano-chords",
      isFeatured: false,
    },
    {
      title: "Drumming Techniques 101",
      description:
        "Discover core drumming techniques every beginner must know.",
      slug: "drumming-techniques-101",
      isFeatured: true,
    },
    {
      title: "Ear Training for Musicians",
      description:
        "Sharpen your musical ear with targeted interval and chord exercises.",
      slug: "ear-training-for-musicians",
      isFeatured: false,
    },
    {
      title: "Intro to Digital Music Production",
      description:
        "A beginner's guide to producing music with digital audio workstations.",
      slug: "intro-to-digital-music-production",
      isFeatured: true,
    },
    {
      title: "Songwriting Fundamentals",
      description:
        "Learn how to craft compelling lyrics and memorable melodies.",
      slug: "songwriting-fundamentals",
      isFeatured: true,
    },
    {
      title: "Performing with Confidence",
      description: "Build stage confidence and connect with your audience.",
      slug: "performing-with-confidence",
      isFeatured: false,
    },
    {
      title: "Vocal Warm-Up Routines",
      description:
        "Essential exercises to prepare your voice before every performance.",
      slug: "vocal-warm-up-routines",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {" "}
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/`,
              // link: `/webinars/${webinar.slug}`
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-300"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcommingWebinars;
