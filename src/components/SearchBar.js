import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div class="searchBar-container">
                <form onSubmit={this.props.onFormSubmit} className="searchBar-form">
                    <input onChange={this.props.onInputChange} placeholder="Search City" type="text" />
                    <button>Search</button>
                </form>
            </div>
        );
    };
};

export default SearchBar;
