import { Component, useState } from 'react';



class Subject extends Component {
    constructor(props){
        super(props);
        this.state={
            value:0,
            gender:"male"
        }
        this.handClick=this.handClick.bind(this);
    }
    handClick(){
        console.log("click");
        this.setState({
            value:this.state.value+1,
            gender:this.state.gender="female"
        })
    }
    render(){
      //let[textTEst,setTextTest]=useState();
      return(
          <header>
            <h1>
              react 수업{this.props.name}
              {this.props.children}
            </h1>
            <h2>{this.state.value} {this.state.gender}</h2>
            <button onClick={this.handClick}>hihi</button>
          </header>
      );
    }
}
export default Subject;

  