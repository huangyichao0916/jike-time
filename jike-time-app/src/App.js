import React from 'react';
import './App.styl';
import './assets/font/iconfont.css'
import { renderRoutes } from 'react-router-config';

function App(props) {
  // console.log(props.route.routes);
  return ( 
    <div className="app">
      {renderRoutes(props.route.routes)}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
