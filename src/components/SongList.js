import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class SongList extends Component {
  render() {
    // console.log(this.props)
    return <div>SongList</div>;
  }
}

// return the piece of state needed by this component
const mapStateToProps = state => ({ songs: state.songs });

// provide the piece of state needed as props to this component
export default connect(mapStateToProps)(SongList);
