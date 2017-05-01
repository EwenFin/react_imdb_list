import React from 'react';
import ReactDOM from 'react-dom';
import MovieBox from './components/MovieBox.jsx'

window.onload = function(){
  ReactDOM.render(
    <MovieBox/>,
    document.getElementById('app')
  );
}
