import React, { useState, useEffect } from 'react';

import type { INewsItem, INewsReques } from '../types';

import NewsItem from './NewsItem';

const NewList = () => {
  const [news, setNews] = useState<INewsItem[] | null | string>(null);
  useEffect(() => {
    function get() {
      fetch(
        'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=7baba5d433fb4223af5513b3c54c01eb'
      )
        .then((res) => res.json())
        .then((data: INewsReques) => {
          setNews([...data.articles]);
        })
        .catch((err) => {
          console.log(err);
          setNews('error');
        });
    }
    get();
  }, []);


  return (
    <section className='news'>
      {Array.isArray(news) ? (
        <ul>
          {news.map((el: INewsItem, index: number) => (
            <NewsItem key={index} item={el} />
          ))}
        </ul>
      ) : news === null ? (
        <div className='loader' />
      ) : (
        'Произошла ошибка, попробуйте позже'
      )}
    </section>
  );
};

export default NewList;
