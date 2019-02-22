import React, { Component } from 'react';

import './App.css';
import Profile from './components/Profile';

class App extends Component {
  // state = {
  //   counter: 0
  // }

  constructor(props) {
    super(props);
    console.log('constructor');

    // api call here will make app lag

    this.state = { counter: 0, name: null, showProfile: true };
  }

  componentDidMount() {
    console.log('componentDidMount');
    // we can fetch data from API or third party
    setTimeout(() => {
      this.setState({ name: 'Sourav' });
    }, 2000);

    this.myInterval = setInterval(() => {
      console.log("Hello");
    }, 3000);

  }

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;
    // when ever state update, this triggers
    console.log('componentDidUpdate', prevState);

    // if (name === 'Sourav' && prevState.name === null) {
    //   this.setState({ name: 'Parminder' });
    // }
  }

  componentWillUnmount() {
    // whenevery this component destroy
    // this.setState({ name: 'nasim' });
    clearInterval(this.myInterval);
  }

  handleRemove = () => {
    const { counter } = this.state;

    if (counter !== 0) {
      this.setState({ counter: counter - 1 });
    }
  }

  render() {
    console.log('render');
    const { counter, name, showProfile } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Current counter is: {counter}
          </p>
          <button onClick={() => this.setState({ counter: counter + 1 })}>add</button>
          <button onClick={this.handleRemove}>remove</button>
          {name === null ? <p>Loading...</p> : <p>My name is: {name}</p>}
          <hr />
          {showProfile && (
            <Profile
              personName={name}
              handleUpdateName={newName => this.setState({ name: newName })} />
          )}
          <button onClick={() => this.setState({ showProfile: !showProfile })}>toggle profile</button>
        </header>
      </div>
    );
  }
}

export default App;
