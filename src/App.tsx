import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import MyPlans from './components/MyPlans';
import NewList from './components/NewsList';
import WeatherContainer from './components/WeatherContainer';

const App = () => {
  console.log('App rerender');
  return (
    <>
      <Header />
      <main>
        <NewList />
        <WeatherContainer />
        <MyPlans />
      </main>
      <Footer />
    </>
  );
};

export default App;
