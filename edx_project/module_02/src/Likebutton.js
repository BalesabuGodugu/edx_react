import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Likebutton extends Component {
  constructor(props){
    super(props)
    this.state={
      liked:false
    }
  }
  toggle(){
    this.setState({
      linked:!this.state.linked
    })
  }
  
  render() {
    var txtName=this.props.name;
    var txt=this.state.liked ? 'unlike':'like';
    var selectedColor=this.state.linked?'red':' blue';
    var itemfont=this.state.linked? 'bold':'normal';

    return (
      <div className="App">
        <p><span style={{color : selectedColor}}>{txtName}</span>
        <<span onClick={this.toggle.bind(this)}>{txt}</span>

        </p>
        
      </div>
    );
  }
}

export default Likebutton;
