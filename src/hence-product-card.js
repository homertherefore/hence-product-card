'use strict';
/**
 * @module hence-product-card
 */

import Hence from 'hence-component-framework';
import _each from 'lodash/collection/each';
import _sample from 'lodash/collection/sample';

/**
 * HenceProductCard Component
 * @constructor
 */
let HenceProductCard = Hence.Model({
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  is: 'hence-product-card',
  properties: {},

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Manipulate the state loaded in from the schema to be suited for the expecting UI element. Executed by the
   * ```renderState()``` function
   *
   * @private
   */
    _transformState(raw) {
    let entry = {
      // Avatar
      //avatar: raw.avatar,
      // Image
      image: raw.photo,
      imagePosition: _sample(['top', 'center', 'background']),
      // Content
      title: raw.name,
      description: raw.description

      /*
      padded: Boolean,
      // Avatar
      avatar: String,
      avatarPosition: {
        type: String,
        value: 'top'
      },
      avatarShape: {
        type: String,
        value: 'circle'
      },
      displayAvatarTop: Boolean,
      displayAvatarCentered: Boolean,
      // Image
      image: String,
      imagePosition: {
        type: String,
        value: 'top'
      },
      displayImageTop: Boolean,
      displayImageCentered: Boolean,
      displayImageBackground: Boolean,
      // Content
      title: String,
      subtitle: String,
      description: String,
      displayIntroTitle: {
        type: Boolean
      },
      // Actions
      actions: Array,
      actionsCentered: Boolean,
      actionsBordered: Boolean
      */
    };

    entry.actions = [];

    entry.actions.push({
      label: 'More Info',
      icon: 'info-circle',
      action: (model, e)=> {
        alert('this is my option!');
      }
    });

    entry.actions.push({
      label: 'Buy Now',
      icon: 'shopping-cart',
      float: 'right',
      action: (model, e)=> {
        alert('this is my option!');
      }
    });

    console.log('HenceProductCard processed',entry);

    return entry;
  }
});

export default HenceProductCard;
