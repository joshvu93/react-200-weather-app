import React from 'react';
import { connect } from 'react-redux';

class SearchHistory extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='card text-center'>
          <div className='card-header'>Search History</div>
            <div className='card-body'><ul>{this.props.history.map((item, index) => <li key={index}>{item}</li>)}</ul></div>
          </div>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    history: state.apiStore.history,
  };
};

export default connect(mapStateToProps)(SearchHistory);