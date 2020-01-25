import React from 'react';

import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './Homepage.styled';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;