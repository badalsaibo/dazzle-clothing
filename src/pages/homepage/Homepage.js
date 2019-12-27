import React from 'react';
import './Homepage.scss'

import Directory from '../../components/directory/Directory';

const Homepage = () => {
  return (
    <div className="homepage fix-width">
      <Directory />
    </div>
  );
}

export default Homepage;