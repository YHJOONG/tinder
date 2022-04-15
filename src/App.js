import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes,} from 'react-router-dom';

import Header from './component/Header';
import TinderCards from './component/TinderCards';
import SwipeButtons from './component/SwipeButtons';
import Chats from './component/chats';

function AppHeaders(){
  const routes = useRoutes(
    [
      {
        path:'/chat',
        element: <Header backButton="/" /> 
      },
      {
        path:'/',
        element:<Header /> 
      },
    ]
  )
  return routes;
}

function AppRoutes(){
  const routes = useRoutes(
    [
      {
        path:'/chat',
        element: <Chats /> 
      },
      {
        path:'/',
        element:<TinderCards /> 
      },
    ]
  )
  return routes;
}

function Bottoms(){
  const routes = useRoutes(
    [
      {
        path:'/',
        element:<SwipeButtons /> 
      },
    ]
  )
   return routes; 
}


function App() {
  return (
    <div className='App'>
     
      <Router>
        <AppHeaders/>
        <AppRoutes/>
        <Bottoms/>
      </Router>
    </div>
  );
}

export default App;
