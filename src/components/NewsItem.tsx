import React from 'react';

import type { INewsItem } from '../types';

const NewsItem = ({ item }: { item: INewsItem }) => (
  <li>
    <div className='news_item_img'>
      <img alt='news img' src={item.urlToImage} />
    </div>
    <div className='news_item_text'>
      <p>{item.title}</p>
      <p>
        {item.description}
      </p>
    </div>
  </li>
);

export default NewsItem;
