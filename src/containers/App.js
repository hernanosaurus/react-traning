import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super( props );
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '001', name: 'Nani', age: '30yrs'},
      { id: '002', name: 'Diane', age: '31yrs'},
      { id: '003', name: 'Simon', age: '7mos'},
    ],
    otherState: 'Random Stuff',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}. this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { 
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    let cockpit = null;

    if(this.state.showPersons) {

      persons = (
        <div>
          <Persons 
            persons         = {this.state.persons} 
            clicked         = {this.deletePersonHandler} 
            changed         = {this.nameChangedHandler}
            isAuthenticated = {this.state.authenticated} 
          />
        </div>
      );
    }

    if(this.state.showCockpit) {
      cockpit = (
        <div>
          <Cockpit 
            title         = {this.props.appTitle}
            showPersons   = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked       = {this.togglePersonsHandler}
          />
        </div>
      );
    }

    return (
        <div className={classes.App}>
          <button onClick={() => {
            this.setState({showCockpit: false});
          }}>Remove Cockpit</button>

          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
            {cockpit}
            {persons}
          </AuthContext.Provider>
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does This Work Now?'));
  }
}

export default App;


