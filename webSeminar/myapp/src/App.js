import React from 'react';
import Header from './components/layout/Header';
import Brand from './components/elements/widgets/brand/Brand';
import Deal from './components/pages/deal/Deal';
import "./assets/css/mystyle.css";

function App() {

  return (
    <>
      <div id="wrap">
        <Header/>
        <Brand />
        <Deal />
      </div>
    </>
  );
}

export default App;
