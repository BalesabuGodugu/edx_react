import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
     super(props);
     
     this.state={
       fontstatus:this.props.bold,
       displayStatusofElements:true,
       currentFontSize:this.props.size,
       itemcolor:'black'
       
     }
    
  }
  
  toggle(){

      this.setState({
        displayStatusofElements:!(this.state.displayStatusofElements)
      })
    // update checkbox functionality
    if(this.state.fontstatus==='true'){
    document.getElementById('boldCheckbox').checked = true;
  
    }
    else{
      if(this.state.fontstatus==='false'){
        document.getElementById('boldCheckbox').checked = false;
      
        this.setState({
          fontstatus:'false',

        })
        }
    }
  }

/*
*  check box functionality
*
*
*/
 
 modifySelection(){
   var selectedItemstatus;
   if(document.getElementById("boldCheckbox").checked){
     this.setState({
       fontstatus:'true'
     })
     selectedItemstatus='bold';
   }
   else{
    this.setState({
      fontstatus:'false'
    })
     selectedItemstatus='normal';
   }
 }


  // fontsize functionality

  fontSizeDecreaseHandler(){
    if(this.state.currentFontSize>this.props.min){
    
       this.setState((prevState, props) => ({
        currentFontSize: --prevState.currentFontSize
    })); 
   }
   else{
    if(this.state.currentFontSize===this.props.min || this.state.currentFontSize===this.props.max){
      
       this.setState({
        itemcolor:'red'
      })
      } 
   }
  
  }
  fontSizeIncreaseHandler(){
    
  if(this.state.currentFontSize<this.props.max){
     this.setState((prevState, props) => ({
      currentFontSize: ++prevState.currentFontSize
      })); 
  
  }
  else{
    if(this.state.currentFontSize===this.props.min || this.state.currentFontSize===this.props.max){
      
       this.setState({
        itemcolor:'red'
      })
      } 
  }

      
    }

    updateElements(){
      console.log("test");
      this.setState({
        currentFontSize:this.props.size
      })
    }

  render() {
     
    
     var selectedItemstatus;
    if(this.state.fontstatus==='true'){
      selectedItemstatus='bold';
    }
    else{
      selectedItemstatus='normal';
    }
  /*  fontsize-change functionality
   *
   *
  */
  


    return(
           <div>
           <input type="checkbox" onChange={this.modifySelection.bind(this)} id="boldCheckbox" hidden={this.state.displayStatusofElements}/>
           <button id="decreaseButton" hidden={this.state.displayStatusofElements} onClick={this.fontSizeDecreaseHandler.bind(this)}>-</button>
           <span id="fontSizeSpan" hidden={this.state.displayStatusofElements} style={{fontSize:this.state.currentFontSize+"px"}}>{this.state.currentFontSize}</span>
           <button id="increaseButton" hidden={this.state.displayStatusofElements} onClick={this.fontSizeIncreaseHandler.bind(this)}>+</button>
           <span id="textSpan" onClick={this.toggle.bind(this)} style={{fontSize:this.state.currentFontSize+ "px",fontWeight:selectedItemstatus,color:this.state.itemcolor}} onDoubleClick={this.updateElements.bind(this)}>{this.props.text}</span>
           </div>
    );
      }
}

export default App;
