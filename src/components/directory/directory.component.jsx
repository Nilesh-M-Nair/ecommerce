import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://capthatt.com/wp-content/uploads/man-in-hat-1-1.jpg',
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: 'jackets',
          imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1894551/2017/9/21/11505979178209-Roadster-Men-Black-Solid-Padded-Jacket-281505979177955-1.jpg',
          id: 2,
          linkUrl: 'shop'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://cdn2.shopify.com/s/files/1/0235/6124/0653/files/yeezy_banner_daomey_footwear_2048x2048.png?v=1563301252',
          id: 3,
          linkUrl: 'shop'
        },
        {
          title: 'womens',
          imageUrl: 'https://www.ritukumar.com/media/wysiwyg/Landing-Page_label-4-feb-2020.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop'
        },
        {
          title: 'mens',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0115/5332/files/Homepage-Banner_72d91758-b1f4-47b6-bb46-6c96a092c9a9_1600x.jpg?v=1575384564',
          size: 'large',
          id: 5,
          linkUrl: 'shop'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
