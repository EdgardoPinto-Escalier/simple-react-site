import React, { Component } from 'react';
import Ebook from '../Ebook/Ebook';
import Searchbar from '../Searchbar/Searchbar';
import './Ebooks.css';

class Ebooks extends Component {

  render() {
    return (
        <div className="ebooks">
            <h2>OUR EBOOKS</h2>
            <Searchbar 
                searching={this.props.searchingEbook}
            />
            <ul className="ebooksList">
                {Object.keys(this.props.ebooks).map(ebook => (
                    <Ebook
                        info={this.props.ebooks[ebook]}
                        key={ebook}
                    />
                ))}
            </ul>
        </div> 
    )
  }
}

export default Ebooks;