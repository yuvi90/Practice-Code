// Deps
import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { MainContainer } from './ServicesElements';
import { Button } from "../../styles/GlobalComponents";
// Data
import { dummyData } from '../../assets/Dummydata';

//----------------------------------------------------------

const Services = () => {
  return (
    <MainContainer className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {dummyData.services.map((curElem) => {
          const { id, title, image, description } = curElem;
          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt="name" />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <NavLink to="/services"><Button className="btn-readmore">Read More</Button></NavLink>
            </div>
          )
        })}
      </div>
    </MainContainer>
  )
}

export default Services;