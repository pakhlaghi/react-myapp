import React, { Component } from 'react';
import UUID from 'uuid';

class Form extends Component {
  constructor() {
    super();
        this.state = {
          title: ""
        };
}

handleChange = (event) => {this.setState({ [event.target.id]: event.target.value})};
onSubmit = (event) => {
  event.preventDefault();
  this.props.addArticle({id: UUID.v4() , title: this.state.title});
  this.setState({title: ''});
};


    render() {
        return (
          <form onSubmit={this.onSubmit}>
            <input
              id='title'
              value={this.state.title}
              onChange={this.handleChange}
               />
            <button >click me</button>
          </form>
        )
    }
}

export default Form
