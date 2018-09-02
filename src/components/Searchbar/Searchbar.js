import React, { Component } from 'react';
import '../Searchbar/Searchbar.css';

class Searchbar extends Component {

    readData = (e) => {
        const searchTerm = e.target.value;

        this.props.searching(searchTerm);
    }

    render() {
    return (
        <form className="searchbar">
            <input type="text" placeholder="Search here" onChange={this.readData} />
        </form>
    );
  }
}

export default Searchbar;