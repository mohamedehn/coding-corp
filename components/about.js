const links = [
    { name: 'Nos prestations', href: '#prestations' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ]
  
  export default function About () {

    return (
      <div className="relative overflow-hidden bg-[#212348] py-24 sm:py-32 h-auto sm:h-screen" id="about">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-justify">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
              Chez Coding Corp, nous sommes passionnés par le web et nous offrons une gamme complète de services pour répondre à tous vos besoins 
              en ligne. Notre expertise couvre divers domaines du web, vous permettant de bénéficier d&apos;un guichet unique pour toutes vos exigences 
              numériques.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-justify"> 
                Nous sommes fiers de notre savoir-faire dans la création de sites vitrines qui captivent l&apos;attention de votre audience cible. 
                Nous allions esthétique et convivialité pour offrir une expérience utilisateur exceptionnelle à chaque visiteur.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
                Chez Coding Corp, nous sommes déterminés à fournir des solutions web de haute qualité qui répondent aux besoins uniques de 
                votre entreprise. Nous sommes impatients de collaborer avec vous pour donner vie à vos idées et vous aider à prospérer 
                dans le monde numérique en constante évolution.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  