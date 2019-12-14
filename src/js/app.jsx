import React from "react";
import CityInfo from "./CityInfo/cityInfo";
import SearchHistory from "./SearchHistory/searchHistory";
import SearchBar from "./SearchBar/searchBar";

export default class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='jumbotron' >
					<h1 className='display-3 text-center'>Weather App</h1>
				</div>
				<SearchBar />
				<br />
				<div className='row'>
					<div className='col-8'>
						<CityInfo />
						<br />
						<div className='col-4'>
							<SearchHistory />
						</div>
					</div>
				</div>
			</div>
		)
	}
}