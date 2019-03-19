import React, { Component} from 'react';


  class Accordion extends Component {
    state = {
        isClicked : false
    };

    handleTitleClick = () => this.setState({isClicked: !this.state.isClicked});

    renderContent = () => this.props.data.map((item) =>(
        <div
            key={item.title}>
            <div>{item.title}</div>
            <div>{item.years}</div>
           <div>{item.content}</div> 
        </div>
    ));

    render() {
     
        return (
          <div>
            <div onClick={this.handleTitleClick}>{this.props.title} <i class="far fa-check-circle"></i></div>
            <div>
               {this.state.isClicked ?this.renderContent() : null}
            </div>
          </div>
        );
      }
    }

  export default Accordion;