import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = {
    main: [
        { name: 'Accueil', href: '/' },
        { name: 'Mentions légales', href: '/mentions' },
        { name: 'Cookies', href: '/cookies' },
      ],
    // social: [
    //   {
    //     name: 'Facebook',
    //     href: '#',
    //     icon: (props) => (
    //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //         <path
    //           fillRule="evenodd"
    //           d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     ),
    //   },   
    // ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-[#1b1e3d]">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8 sm:pt-14 pt-24">
          <nav className="-mb-6 sm:flex sm:justify-center sm:space-x-12 block" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-200 hover:text-gray-500">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          {/* <div className="mt-10 flex justify-center space-x-10">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div> */}
          <p className="mt-5 text-center text-xs leading-5 text-gray-200">
            &copy; 2023 Coding Corp, Tous droits réservés.
          </p>
        </div>
      </footer>
    )
  }
  