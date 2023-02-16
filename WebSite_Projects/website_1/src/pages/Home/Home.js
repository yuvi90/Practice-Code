// Dependencies
import React from 'react';
// Components
import { homePageObj1, homePageObj2, homePageObj3 } from "./Data";
import { Section } from '../../components'

//----------------------------------------------------------------

const Home = () => {
  return (
    <>
        <Section {...homePageObj1} />
        <Section {...homePageObj2} />
        <Section {...homePageObj3} />
    </>
  )
}

export default Home