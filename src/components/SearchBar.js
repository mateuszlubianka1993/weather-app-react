import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.props.onInputChange} type="text" />
                    <label>Search city </label>
                </form>
            </div>
        );
    };
};

export default SearchBar;
