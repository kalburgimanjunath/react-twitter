import React,{useState} from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component { 
  state = {
    show:false
  } 
  constructor(props){
    super(props);
       
  }
  showModal = e => {
    console.log(e);
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    console.log(this.props)
    if(!this.props.show){
      return null;
    }
    
    return <div>Hello Modal</div>;
  }
}
export default Modal;
