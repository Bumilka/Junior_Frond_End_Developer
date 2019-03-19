import React, { Component } from 'react';
import './App.css';


// arow function
// const Text = (props) => (
//     <div>
//         {props.text}
//     </div>
// )
// export default text;

    class Text extends Component {
    render() {
        return (
        <div>
            Text: {this.props.name}
        </div>
        );
    }
    }
    export default Text;