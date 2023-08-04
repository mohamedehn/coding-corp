import Link from "next/link"
  
  export default function About () {

    return (
      <div className="bg-[#212348] h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-auto sm:h-screen flex justify-center">
          <div className="mx-auto lg:mx-0 justify-center pt-32">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl sm:justify-center flex">Le formulaire a été transmis avec succès!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-200 justify-center flex">
                Merci d&apos;avoir pris le temps de nous contacter. Nous avons bien reçu votre message et nous y répondrons dans 
                les plus brefs délais.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200 justify-center flex"> 
                En attendant, n&apos;hésitez pas à parcourir notre site pour découvrir nos services.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-200 justify-center flex">
                Cliquez&nbsp;<Link href="/" className="underline">ici</Link>&nbsp;pour retourner à l&apos;accueil.
            </p>
          </div>
        </div>
      </div>
    )
  }
  