"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/tasks", label: "All Tasks" },
  { href: "/dashboard", label: "Dashboard" },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md"
        aria-label={isOpen ? "close sidebar" : "open sidebar"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={clsx(
          "fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-5 space-y-6 shadow-lg transition-transform z-50",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="close sidebar"
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold">To do List App</h2>

        <nav className="space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "block px-4 py-2 rounded-md transition duration-300",
                pathname === href
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-700"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
