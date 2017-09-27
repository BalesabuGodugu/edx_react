import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={count:0}
  }

// call click event and update count 
// state updated

incrementCount(){
  this.setState({
    count:this.state.count+1
  }
    
  )
}

  render() {
    return (
      <div className="App">
        <p>count:{this.state.count}</p>
        <button type="button" onClick={this.incrementCount.bind(this)}>clickhere</button>
      </div>
    );
  }
}

export default App;
