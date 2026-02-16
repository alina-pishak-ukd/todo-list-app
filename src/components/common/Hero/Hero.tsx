import React, { FC } from "react";

import Link from "next/link";

import { Title } from "@/components/ui/Title/Title";

export const Hero: FC = () => {
  return (
    <section className="container flex flex-col gap-6 justify-center min-h-screen text-white ">
      <Title>TaskEase</Title>
      <p className="text-lg text-gray-400 max-w-lg md:text-xl">
        A simple and minimalist task manager to keep you organized and
        productive.
      </p>

      <Link
        href="/tasks"
        className="bg-slate-400 text-white py-2 px-4 rounded-lg transition-colors hover:bg-slate-500 text-center text-lg font-semibold shadow-lg md:w-64"
      >
        Get Started
      </Link>
    </section>
  );
};
