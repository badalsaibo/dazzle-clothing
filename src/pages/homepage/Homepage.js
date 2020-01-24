import React from 'react';
import './Homepage.scss'

import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './Homepage.styles';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;