export function removeDuplicates(playlist) {
    return [...new Set(playlist)];
}

export function hasTrack(playlist, track) {
    const playlistSet = new Set(playlist);
    return playlistSet.has(track)
}

export function addTrack(playlist, track) {
    const playlistSet = new Set(playlist);
    playlistSet.add(track)
    return [... playlistSet]
}

export function deleteTrack(playlist, track) {
    const playlistSet = new Set(playlist);
    playlistSet.delete(track)
    return [... playlistSet]
}

export function listArtists(playlist) {
    const musicArtists = playlist.map(element => element.split('-'))
    const artists = musicArtists.map(elem => elem[1].trim())
    return [... new Set(artists)]
}