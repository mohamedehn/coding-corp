import { Inter } from 'next/font/google';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '@/components/about';
import Prestations from '@/components/prestations';
import Portfolio from '@/components/portfolio';
import Form from '@/components/form';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scrollToTop';
import PopUpCookies from '@/components/popUpCookies';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Corp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Je suis passionné par le web et, à travers Coding Corp,
        je vous propose une gamme complète de services pour répondre à tous vos besoins en ligne.
        Mon expertise couvre divers domaines du web, vous permettant de bénéficier d’un interlocuteur
        unique pour toutes vos exigences numériques."/>
        <meta name="google-site-verification" content="v9XzvmL7QdO5dQvkAkJyTNF2JKdIg1ISWS_OR82ht-Q" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Hero />
      <PopUpCookies />
      <About />
      <Prestations />
      <Portfolio />
      <Form />
      <Footer />
      <ScrollToTop />
    </>
  )
}
