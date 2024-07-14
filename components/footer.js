import React from "react";

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Mentions légales', href: '/mentions' },
    { name: 'Cookies', href: '/cookies' },
  ],
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
        <p className="mt-5 text-center text-xs leading-5 text-gray-200">
          &copy; 2023 Coding Corp, Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
