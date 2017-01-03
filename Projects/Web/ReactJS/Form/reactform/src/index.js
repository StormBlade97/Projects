import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import BookStore from './BookStore.js';

/*class InputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '-'};
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  render() {
    return (
       <input type="text" defaultValue="Shawn" onChange={this.handleChange} onBlur={this.handleBlur}/>
    );
  }
  getInitialState(){
    return ({name: '-'});
  }
  
  handleChange(event){
    this.setState({name: event.target.value.toUpperCase()});
  }
  handleBlur(event){
    alert(this.state.name);
  }
}*/

ReactDOM.render(
  <BookStore/>,
  document.getElementById('root')
);
