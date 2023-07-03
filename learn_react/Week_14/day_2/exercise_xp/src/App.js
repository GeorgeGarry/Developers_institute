import logo from './logo.svg';
import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Color from './components/Color';

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  componentDidUpdate() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
  }
  render() {
    const handle_click = () => {
      this.setState({ counter: this.state.counter + 1 })

    }
    return (
      <div>
        <button onClick={() => { handle_click() }}>Counter  {this.state.counter}</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h3>2 counters in 1 error wrapper</h3> */}
        {/* <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <h3>2 counters, each has an error wrapper</h3>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <h3>no error wrappers</h3>
        <BuggyCounter /> */}
        <Color/>
      </header>
    </div>
  );
}

export default App;
