import React, {Component} from 'react'
import './App.css'

class Text extends Component {
    render(){
        return (
            <div class="text">
               {this.props.name}
            </div>
        );
    }
}

export default Text;