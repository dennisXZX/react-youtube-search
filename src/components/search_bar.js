import React, {Component} from 'react';

// class component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // bind this
        this.onInputChange = this.onInputChange.bind(this);

        // initialize state
        this.state = {
            term: ""
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)}
                placeholder="Type your search term here" />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    };
    
}

export default SearchBar;