'use strict';

import HenceProductCard from './hence-product-card';

HenceProductCard.appendElementTo({
  query: {
    id: 1
  }
});

HenceProductCard.appendElementTo({
  query: {
    id: 2
  }
});

export * from './hence-product-card';
