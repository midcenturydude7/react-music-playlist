function songReducer(state, action) {
    switch (action.type) {
        case "PLAY_SONG": {
            return {
                ...state, 
                isPLaying: true
            };
        }
        case "PAUSE_SONG": {
            return {
                ...state, 
                isPLaying: false
            };
        }
        case "SET_SONG": {
            return {
                ...state,
                song: action.payload.song
            };
        }
        default:
            return state;
    }
}

export default songReducer;
