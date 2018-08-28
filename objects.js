var playlist = {
  'Violent Femmes': 'Add It Up',
  //will not pass with oxford comma!
  'The Whispers': 'And The Beat Goes On'
}

function updatePlaylist(playlist, artistName, songTitle) {
  // Remember, because one of this function's arguments
  // is `playlist`, the `playlist` _inside_ the function
  // is not the same as the top-level `playlist` outside
  // the function
  playlist.artistName = songTitle;

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  //no quotations in bracket because are using a VARIABLE to refer to the key artistName, not an actual string!
  delete playlist[artistName];

  return playlist;
}
