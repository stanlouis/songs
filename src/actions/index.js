/* eslint-disable import/prefer-default-export */
// Action creator
export const selectSong = song => ({
  type: 'SONG_SELECTED',
  payload: song,
});
