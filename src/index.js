require('./stylesheets/header.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/shared/heading';
import NavBar from './components/shared/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="header">
        <Heading title="Research Study Portal" />
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
