import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '@/components/about';
import Prestations from '@/components/prestations';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Coding Corp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name ="description" content=""/>
      </Head>
      <Hero/>
      <About/>
      <Prestations/>
      </>
  )
}
