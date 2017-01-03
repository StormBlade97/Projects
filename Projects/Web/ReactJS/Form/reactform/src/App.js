import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let headers = this.props.headers.map(function(header){
      return <td>{header}</td>;
    });
    let rows = this.props.data.map(function(row){
      return <tr>
      <td>{row.when}</td>
      <td>{row.who}</td>
      <td>{row.description}</td>
      </tr>
    });
    return (
      <table className="table table-stripped">
        <thead><tr>{headers}</tr></thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default App;
