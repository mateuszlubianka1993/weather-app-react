import React from 'react';
import './SearchBar.css';
import './SearchBarRWD.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchBar-container">
                <form onSubmit={this.props.onFormSubmit} className="searchBar-form">
                    <input onChange={this.props.onInputChange} placeholder="Search City" type="text" />
                    <button>Search</button>
                </form>
            </div>
        );
    };
};

export default SearchBar;
