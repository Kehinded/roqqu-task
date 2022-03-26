import React from 'react'
import { Helmet } from "react-helmet-async";
import LearnSection from '../sections/LearnSection';

const LearnPage = () => {
  return (
   <>
   <Helmet>
        <title>Roqqu Exchange</title>
        <meta
          name="description"
          content="roqqu exchange site learn, crypto roqqu site learn, exchange site learn, get crypto learn, All things Crypto, Blockchain, NFTs and Metaverse learn."
        />
        <link rel="canonical" href="/learn" />
      </Helmet>
      <LearnSection />
   </>
  )
}

export default LearnPage