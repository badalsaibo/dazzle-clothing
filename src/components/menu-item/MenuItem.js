import React from 'react';

import { withRouter } from 'react-router-dom';

import { MenutItemContainer, BackgroundImage, ContentContainer, ContentTitle, ContentSubTitle } from './MenuItem.styled';

const MenuItem = ( { title, imageUrl, size, linkUrl, history, match } ) => {
  return (
    <MenutItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>shop now</ContentSubTitle>
      </ContentContainer>
    </MenutItemContainer>
  );
}

export default withRouter(MenuItem);