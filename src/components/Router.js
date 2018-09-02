import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Ebooks from './Ebooks';
import About from './About';
import Error from './Error';
import SingleEbook from './SingleEbook';
import Contact from './Contact';
import dataEbooks from '../data/data.json';


class Router extends Component {

  state = {
    ebooks: []
  }

  componentWillMount() {
    this.setState({
      ebooks : dataEbooks
    })
  }

  render() {
    return ( 
      <BrowserRouter>
      <div className="container">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => (
              <Ebooks
                  ebooks={this.state.ebooks}
              />
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ebooks" render={ () => (
              <Ebooks
                  ebooks={this.state.ebooks}
              />
          )} />
          <Route exact path="/ebook/:ebookId" render={(props) => {
              let idEbook = props.location.pathname.replace('/ebook/', '');
              return (
                  <SingleEbook
                      ebook={this.state.ebooks[idEbook]}
                  />
              )
          }} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default Router;