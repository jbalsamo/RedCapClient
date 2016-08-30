import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/heading';


class App extends React.Component {
  render() {
    return (
      <div>
        <Heading title="Reasearch Study Portal!" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
