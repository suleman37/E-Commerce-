import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/PopularCollection/Popular';
import Exclusive from '../Components/Exclusive/exclusive';
import NewCollection from '../Components/collection/new';
import Email from "../Components/Email/email"

const Shop = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Exclusive/>
      <NewCollection/>
      <Email/>
    </>
  )
}

export default Shop;