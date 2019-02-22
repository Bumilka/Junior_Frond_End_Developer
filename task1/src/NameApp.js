import React, {Component} from 'react'
import './App.css'

class NameApp extends Component {
    render(){
        return (
            <div class="name_text">
               {this.props.name}
            </div>
        );
    }
}

export default NameApp;