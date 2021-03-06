import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollecionProps }) => (
      <CollectionPreview key={id} {...otherCollecionProps} />
    ))}
  </div>
);

const mapToStateProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapToStateProps)(CollectionsOverview);
