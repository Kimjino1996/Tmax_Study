import logo from './celebrity.PNG';
import './App.css';
//import React,{Component,Fragment,useEffect} from 'react';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Subject from './component/Subject';
import Second from './component/Navi';
import Third from './component/Contents';




function App() {
  //스크립트 관련 내용 여기 기술  
  //return 에는 하나의 박스만 return 할 수 있다. 
  // component 는 못 보내지만 객체, 함수, var, array 싹다 됨.
  // app.js 에 다 구현하지는 않음.
  // 상위 레벨에 더이상 영향을 끼치지 않고싶다 == Fragment 박스 <> </> 과 같은 역할
  return (
    <div>
    <Subject 
    name="jino"
    address="male"
    >
          aaaaaaaaaaaa
    </Subject>
    <Second />
    <Third name="nonono"/>    
    </div>
    

  );
}

 

export default App;
