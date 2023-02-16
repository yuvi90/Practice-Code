// Deps
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Components
import { Button } from "../styles/GlobalComponents";

//--------------------------------------

const ErrorContainer = styled.section`
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  .btn {
    font-size: 1.8rem;
  }
`;

//--------------------------------------

const Error404 = () => {
  return (
    <ErrorContainer>
      <img src="./images/error.svg" alt="error" />
      <NavLink to="/"><Button className="btn">Go Home</Button></NavLink>
    </ErrorContainer>
  )
}

export default Error404