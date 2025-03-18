import { useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/watermann-logo-blue-h.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Panel from "./panel";


const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4 md:px-20">
        <div>
          <div style={{ width: "12rem" }}>
            <Image
              data-testid="close-icon"
              layout="responsive"
              alt="logo"
              className="grid-element next-image"
              objectFit="contain"
              src={Logo}
            ></Image>
          </div>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto "
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 align-center rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                class="block py-2 px-3 text-white bg-blue-950 hover:text-green-950 rounded md:bg-transparent md:text-blue-950 md:p-0 md:dark:text-blue-950"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Panel />
            </li>
            <li>
              <Link
                href="#about"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div
          style={{ "flex-grow": ".05" }}
          class="flex justify-center  space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <Link
            href="#contact"
            type="button"
            class="text-white bg-blue-950 hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
