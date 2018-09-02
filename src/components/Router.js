import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Ebooks from './Ebooks/Ebooks';
import About from './About/About';
import Error from './Error/Error';
import SingleEbook from './SingleEbook/SingleEbook';
import Contact from './Contact/Contact';
import dataEbooks from '../data/data.json';


class Router extends Component {

  state = {
    ebooks: [],
    searchTerm : ''
  }

  componentWillMount() {
    this.setState({
      ebooks : dataEbooks
    })
  }

  searchingEbook = (searching) => {
      if(searching.length > 3) {
          this.setState({
            searchTerm : searching
          })
      } else {
            this.setState({
              searchTerm : ''
            })
      }
  }

  render() {

    let ebooks = [...this.state.ebooks];
    let searching = this.state.searchTerm;
    let result;

    if(searching !== '') {
        result = ebooks.filter(ebook => (
          ebook.name.toLowerCase().indexOf( searching.toLowerCase() ) !== -1
        ))
    } else {
        result = ebooks;
    }

    return ( 
      <BrowserRouter>
      <div className="container">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => (
              <Ebooks
                  ebooks={result}
                  searchingEbook={this.searchingEbook}
              />
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ebooks" render={ () => (
              <Ebooks
                  ebooks={result}
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