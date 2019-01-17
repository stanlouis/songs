import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please Select a Song</div>;
  }
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Title">{song.title}</td>
            <td data-label="Duration">{song.duration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({ song: state.selectedSong });
export default connect(mapStateToProps)(SongDetail);
