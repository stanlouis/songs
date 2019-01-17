import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class SongList extends Component {
  renderList() {
    const { songs } = this.props;
    return songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button type="button" className="ui button primary">
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    // console.log(this.props)
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// return the piece of state needed by this component
const mapStateToProps = state => ({ songs: state.songs });

// provide the piece of state needed as props to this component
export default connect(mapStateToProps)(SongList);

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
