import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => (
  <React.Fragment>
    <div className="ui inverted vertical masthead center aligned segment">
      <h1 className="ui inverted header">Intro To Redux</h1>
      <h2>A simple App to demonstrate React Redux</h2>
    </div>
    <div className="ui container grid" style={{ marginTop: '100px' }}>
      <div className="ui row">
        <div className="column eight wide">
          <h2 className="ui center aligned header">Song List</h2>
          <SongList />
        </div>
        <div className="column eight wide">
          <h2 className="ui center aligned header">Song Detail</h2>
          <SongDetail />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default App;
