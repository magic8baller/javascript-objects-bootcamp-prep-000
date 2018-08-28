let playlist = {
    ['Jackson 5']: 'Who\'s Loving You',
    ['Violent Femmes']: 'Add It Up',
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist['artistName'] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName;
    return playlist;
}