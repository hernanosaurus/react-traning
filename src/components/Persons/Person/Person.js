/*
    USING AUXILLARY TO RETURN ADJACENT ELEMENT WITHOUT USING A PARENT DOM ELEMENT
*/

import React, { Component } from 'react';
import classes from './Person.css';
import Auxillary from '../../../hoc/Auxillary';

class Person extends Component {
    
    render() {
        console.log('[Person.js] rendering...');

        return (
            <Auxillary>
                <p 
                    onClick={this.props.click}>I'm a {this.props.name} I am {this.props.age} old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Auxillary>
        );
    } 
}

export default Person;

/*
    USING COMPONENTS
*/

// class Person extends Component {
    
//     render() {
//         console.log('[Person.js] rendering...');

//         return (
//             <div className={classes.Person}>
//                 <p 
//                     onClick={this.props.click}>I'm a {this.props.name} I am {this.props.age} old!
//                 </p>
//                 <p>{this.props.children}</p>
//                 <input 
//                     type="text" 
//                     onChange={this.props.changed} 
//                     value={this.props.name} 
//                 />
//             </div>
//         );
//     } 
// }

// export default Person;

/*
    USING FUNCTIONS
*/

// import React from 'react';
// import classes from './Person.css';

// const person = (props) => {
//     console.log('[Person.js] rendering...')
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm a {props.name} I am {props.age} old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// }

// export default person;