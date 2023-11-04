import React from 'react';
import Nav from './components/Nav/Nav'
import Header from './components/header/header';
import Content from './components/content/content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '45658736ade5c2c48a884dbaf0ae2826',
};

const App=()=> {
 return(
 <div>
    <Nav />
    <Header />
   <Content />
 </div>
 );

}

export default App;
