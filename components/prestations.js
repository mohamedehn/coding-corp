import { CheckCircleIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Création de site vitrine',
    id: 'tier-basic',
    href: '#',
    price: { monthly: 'à partir de 1500€', other: "(refonte de site existant sur devis)"},
    description: 'Captivez votre audience avec un site percutant.',
    features: ["5 pages inclus", "référencement google", "mise en ligne et maintenance"],
  },
  {
    name: 'Référencement SEO',
    id: 'tier-essential',
    href: '#',
    price: { monthly: 'à partir de 500€'},
    description: "Nous comprenons l'importance de la visibilité en ligne et travaillons diligemment pour optimiser votre site web.",
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
    price: { monthly: 'à partir de 250€', other:'refonte logo existant sur devis' },
    description: "Un logo bien conçu est essentiel pour établir une présence visuelle forte et différencier votre entreprise de la concurrence.",
    features: [
      'Plusieurs variantes de couleurs',
      'Différents formats de fichiers',
    
    ],
  },
]

export default function Prestations() {
  return (
    <div className="bg-[#1b1e3d] py-10 sm:py-14 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-gray-200">Nos prestations</h2>
          {/* <p className="mt-2 text-2xl font-bold tracking-tight text-gray-200 sm:text-3xl">
            Choose the right plan for&nbsp;you
          </p> */}
        </div>
        <p className="mx-auto mt-6 text-lg leading-8 text-gray-200 sm:text-center">
            Coding Corp offre une gamme complète de services web, allant de la création de sites vitrines captivants au référencement SEO 
            pour augmenter votre visibilité en ligne. Nous proposons également des services de conception de logos uniques pour renforcer 
            l&apos;identité de votre marque. Pour vos besoins professionnels, nous pouvons concevoir des cartes de visites 
            percutantes. De plus, notre équipe de professionnels est disponible en free-lance pour répondre à vos projets spécifiques. 
            Avec Coding Corp, faites de votre présence en ligne une expérience mémorable et prospérez dans le monde numérique en constante 
            évolution.
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
