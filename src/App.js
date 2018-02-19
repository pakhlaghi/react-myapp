import React, { Component } from 'react';
import './App.css';
import Form from './components/toDo/form';

import { connect } from 'react-redux';
import * as articleActions from './actions/articleActions';

import { Link, Route } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

class App extends Component {

// addArticle = (item) => {
//   this.setState({items: [...this.state.items, item]});
//   console.log(this.state.items);
// };
deleteArticle = (id) => {
console.log(id);
  this.props.deleteArticle(id)
};
    render() {
        return (
          <div className = "App" >
            <header className = "App-header" >
              <h1 className = "App-title" > Welcome to </h1>
            </header>

            <Form addArticle={this.props.addArticle} / >

{this.props.articles.map((b) => <li key={b.id}>{b.title}<button onClick={(e) => this.deleteArticle(b.id)}>delete</button></li> )}

              <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Homes</Link>
                  </li>
                  <li>
                    <Link to="/category">Category</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>

                </ul>
              </nav>

                <Route path="/" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/products" component={Products}/>

            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    articles: state.articles
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    addArticle: item => dispatch(articleActions.addArticle(item)),
    deleteArticle: id => dispatch(articleActions.deleteArticle(id))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App);
