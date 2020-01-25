import React from 'react';
import { connect } from 'react-redux';

// import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';

import { selectDirectorySections } from '../../redux/directory/directory-selector';

import { DirectoryMenu } from './Directory.styled';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map( ({ id, ...otherSectionProps }) => 
        <MenuItem key={id} {...otherSectionProps}/>
      )}
    </DirectoryMenu>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state)
  };
};

export default connect(mapStateToProps)(Directory);