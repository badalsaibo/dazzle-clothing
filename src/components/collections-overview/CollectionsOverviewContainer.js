import { connect } from 'react-redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop-selector';

import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = (state) => {
  return {
    isLoading: selectIsCollectionFetching(state)
  };
};

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;





