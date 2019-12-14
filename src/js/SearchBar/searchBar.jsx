import React from "react";
import { connect } from 'react-redux';
import { getWeather } from "./searchBarActions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    }

    this.handleSearchBar = this.handleSearchBar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchBar(e) {
    this.setState({ searchValue: e.target.value });
  }

  handleSearch() {
    this.props.getWeather(this.state.searchValue);
  }

  render() {
    return (
      <div className="container">
        <div className="btn-group">
          <button className="btn-1" value="San Diego" onClick={this.handleSearchBar}>San Diego</button>
          <button className="btn-2" value="New York" onClick={this.handleSearchBar}>New York</button>
          <button className="btn-3" value="Delhi" onClick={this.handleSearchBar}>Delhi</button>
          <button className="btn-4" value="London" onClick={this.handleSearchBar}>London</button>
          <button className="btn-5" value="Tokyo" onClick={this.handleSearchBar}>Tokyo</button>
        </div>
        <form className="form-inline active-cyan-4">
          <input
            className="form-control form-control-sm w-75"
            type="text"
            onChange={this.handleSearchBar}
            value={this.state.searchValue}
            placeholder="Search"
          />
          <button className="search-btn"type="button" onClick={this.handleSearch}>
            Go!
        </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { getWeather })(SearchBar);