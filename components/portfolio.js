import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import dns from "../public/assets/dns.png"
import ges from "../public/assets/ges2.webp"
import prestatair from "../public/assets/prestatair.png"

const clients = [
  {
    name: "Prestat'air",
    title: 'React / Tailwind',
    web: 'https://www.association-prestatair.com/',
    imageUrl: prestatair,
  },
  {
    name: 'DNS France',
    title: 'React / Tailwind',
    web: 'https://datanetworksolutions.fr/',
    imageUrl: dns,
  },
  {
    name: 'Green Energy Solutions',
    title: 'React / SCSS',
    web: 'https://greenenergysolutions.fr/',
    imageUrl: ges,
  },
]

export default function Portfolio() {

  return (
    <div className='h-auto sm:h-screen bg-[#212348] w-full'>
        <h1 className="text-4xl font-semibold leading-7 text-gray-200 mx-auto max-w-4xl sm:text-center pt-10">Portfolio</h1>
        <p className='mx-auto mt-6 text-lg leading-8 text-gray-200 sm:text-center'>Découvrez ci-dessous quelques une de nos réalisations.</p>
        <div className='flex w-full justify-center'>
            <ul role="list" className="grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:flex justify-around items-center h-full 
            block pt-20">
        {clients.map((company) => (
            <li
            key={company.web}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-blue-200 text-center shadow h-[50%] w-[240px]
            sm:mb-0 mb-10"
            >
            <div className="flex flex-1 flex-col p-8">
                <Image className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-contain" src={company.imageUrl} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{company.name}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{company.title}</dd>
                <dt className="sr-only">Role</dt>
                {/* <dd className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {person.role}
                    </span>
                </dd> */}
                </dl>
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                    <a
                    href={company.web}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    Site web
                    </a>
                </div>
                {/* <div className="-ml-px flex w-0 flex-1">
                    <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                    <CodeBracketIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    Code
                    </a>
                </div> */}
                </div>
            </div>
            </li>
        ))}
            </ul>
        </div>
    </div>
    
  )
}
