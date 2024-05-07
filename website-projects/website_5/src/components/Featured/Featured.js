import React from 'react'

import { FeaturedContainer, FeaturedButton } from "./FeaturedElements";

const Featured = () => {
  return (
    <FeaturedContainer>
        <h1>Pizza of the Day</h1>
        <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
        <FeaturedButton>Order Now</FeaturedButton>
    </FeaturedContainer>
  )
}

export default Featured