import React from 'react';
import { connect } from 'react-redux';

import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directory-selector';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map( ({ id, ...otherSectionProps }) => 
        <MenuItem key={id} {...otherSectionProps}/>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state)
  };
};

export default connect(mapStateToProps)(Directory);