import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onFormSubmit}>
                    <input onChange={this.props.onInputChange} placeholder="Search City" type="text" />
                    <button>Search</button>
                </form>
            </div>
        );
    };
};

export default SearchBar;
