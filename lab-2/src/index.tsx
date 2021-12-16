import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import NewBooks from "./components/new/New";
import Bestsellers from "./components/bestsellers/Bestsellers";
import OldBooks from "./components/oldButGold/oldBooks";
import TopRated from "./components/topRated/topRated";

ReactDOM.render(
  (
      <BrowserRouter>
          <App>
              <Routes>
                  <Route path='/' element={<Bestsellers />}/>
                  <Route path='/old' element={<OldBooks />}/>
                  <Route path='/new' element={<NewBooks />}/>
                  <Route path='/top' element={<TopRated />}/>
              </Routes>
          </App>
      </BrowserRouter>
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
