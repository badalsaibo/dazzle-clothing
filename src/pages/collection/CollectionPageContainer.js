import { connect } from 'react-redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selector';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = (state) => {
  return {
    isLoading: !selectIsCollectionsLoaded(state)
  };
};

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;