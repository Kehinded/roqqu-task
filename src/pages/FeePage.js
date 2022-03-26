import React from 'react'
import { Helmet } from "react-helmet-async";
import FeeSection from '../sections/FeeSection';

const FeePage = () => {
  return (
    <>
     <Helmet>
        <title>Roqqu Exchange</title>
        <meta
          name="description"
          content="roqqu exchange site fee, crypto roqqu site fee, exchange site fee, get crypto fee, All things Crypto, Blockchain, NFTs and Metaverse fee."
        />
        <link rel="canonical" href="/fee" />
      </Helmet>
      <FeeSection />
    </>
  )
}

export default FeePage