import React, {Component} from 'react'
import './App.css'

class About extends Component {
    render(){
        return (
            <div class="about_text">
               {this.props.name}
            </div>
        );
    }
}

export default About;