import { CheckCircleIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Création de site vitrine',
    id: 'tier-basic',
    href: '#',
    price: { monthly: 'à partir de 900€', other: "(refonte de site existant sur devis)" },
    description: 'Captivez votre audience avec un site percutant.',
    features: ["5 pages inclus", "référencement google", "mise en ligne et maintenance"],
  },
  {
    name: 'Référencement SEO',
    id: 'tier-essential',
    href: '#',
    price: { monthly: 'à partir de 350€' },
    description: "La visibilité en ligne est une étape importante dans la vie d'une entreprise et je travaille diligemment pour optimiser votre site web.",
    features: [
      'référencement Google',
      'optimisation des performances',
      'accessibilité'
    ],
  },
  {
    name: 'Création de logo / Carte de visite',
    id: 'tier-growth',
    href: '#',
    price: { monthly: 'à partir de 150€', other: '(refonte logo existant sur devis)' },
    description: "Un logo bien conçu est essentiel pour établir une présence visuelle forte et différencier votre entreprise de la concurrence.",
    features: [
      'Plusieurs variantes de couleurs',
      'Différents formats de fichiers',

    ],
  },
]

export default function Prestations() {
  return (
    <div className="bg-[#1b1e3d] py-10 sm:py-14 h-auto lg:h-screen" id='prestations'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-gray-200 sm:pt-0 pt-16">Mes prestations</h2>
        </div>
        <p className="mx-auto mt-6 text-lg leading-8 text-gray-200 sm:text-center text-justify">
          Chez Coding Corp, je vous propose une gamme complète de services web, allant de la création de
          sites vitrines captivants au référencement SEO, en passant par la conception de logos uniques
          pour renforcer votre visibilité en ligne. Pour vos besoins professionnels, je peux également
          concevoir des cartes de visite percutantes. En tant que professionnel freelance, je suis en capacité
          de m’engager sur des missions variées, de courte ou longue durée, afin de vous accompagner dans
          la réalisation de vos projets, qu’il s’agisse d’un site, d’une application ou encore d’un logiciel.
          Avec Coding Corp, faites de votre présence en ligne une expérience mémorable.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-200">
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold tracking-tight text-gray-200">{tier.price.monthly}</span>
                </p>
                <p className='text-lg font-bold tracking-tight text-gray-200 pt-3'>{tier.price.other}</p>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-200">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-200">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
