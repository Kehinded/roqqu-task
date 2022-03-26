import React from 'react'
import { Helmet } from "react-helmet-async";
import BusinessSection from '../sections/BusinessSection';

const BusinessPage = () => {
  return (
    <>
     <Helmet>
        <title>Roqqu Exchange</title>
        <meta
          name="description"
          content="roqqu exchange site business, crypto roqqu site business, exchange site business, get crypto business, All things Crypto, Blockchain, NFTs and Metaverse business."
        />
        <link rel="canonical" href="/business" />
      </Helmet>
      <BusinessSection />
    </>
  )
}

export default BusinessPage