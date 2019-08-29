import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');

        // if( nextProps.persons !== this.props.persons ) {
        //     return true;
        // }else {
        //     return false;
        // }
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person,index) => {
            return <Person 
                key     = {person.id}
                name    = {person.name} 
                age     = {person.age} 
                click   = {() => this.props.clicked(index)}
                changed = {(event) => this.props.changed(event, person.id)}
                isAuth  = {this.props.isAuthenticated}
            />
        });
    }
}

export default Persons;

// import React from 'react';
// import Person from './Person/Person';

// const persons = (props) => 
// {
//     console.log('[Persons.js] rendering...')
//     return props.persons.map((person,index) => {
//         return <Person 
//             key={person.id}
//             name={person.name} 
//             age={person.age} 
//             click={() => props.clicked(index)}
//             changed={(event) => props.changed(event, person.id)}
//         />
//     });
// }

// export default persons;

// const persons = (props) => {
//     return(
//          // return jsx code
//     );
// }

// if you only have 1 line to return you can use the code below

// const persons = (props) => (
//     // return jsx code
// );

