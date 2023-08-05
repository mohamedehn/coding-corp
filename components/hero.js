import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import coding from '../public/assets/Coding2.png'

const navigation = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Prestations', href: '#prestations' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  const handleNav = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    // Fermer le menu de navigation sur téléphone lorsqu'un lien est cliqué
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };


  return (
    <div className="h-screen bg-[#1b1e3d]">
      <header className="absolute inset-x-0 top-0 h-screen">
        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1b1e3d] px-6 py-6 sm:max-w-sm sm:ring-1
             sm:ring-gray-900/10"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}>
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src={coding}
                  alt="/"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root justify-center">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick} // Appeler la fonction handleLinkClick lorsqu'un lien est cliqué
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:text-gray-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative px-6 pt-5 lg:px-8">
      <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="w-auto h-[150px] absolute top-0 right-0 left-0 bottom-0"
                src={coding}
                alt="/"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 justify-center pt-5">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-gray-200 hover:text-gray-500">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              Coding Corp
            </h1>
            <h2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl pt-10">
              Booster votre présence sur le web !
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Nos solutions s&apos;adaptent à vos besoins.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 z-100">
              <a
                href="#about"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                En savoir plus
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-gray-200">
                Contactez-nous <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
    </div>
  )
}
