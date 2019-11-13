import { RECEIVE_CURRENT_SONG, RECEIVE_NEXT_SONG, RECEIVE_PREV_SONG,
  ADD_SONG_QUEUE, GET_QUEUE_POS, TOGGLE_SHUFFLE, TOGGLE_REPEAT, SET_SONG_QUEUE, IS_PLAYING,  } from "../../actions/song_actions";

function shuffle(a) {
  let arr = a.slice(0);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const defaultState = {
  currentSong: null,
  isPlaying: false,
  shuffle: false,
  repeat: false,
  queue: [],
  shuffledQueue: [],
  queuePosition: -1,
};

const audioReducer = (state = defaultState , action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, state, {currentSong: action.songId});
    case IS_PLAYING: 
      return Object.assign({}, state, {isPlaying: action.boolean})
    case SET_SONG_QUEUE:
      const queueState = Object.assign({}, state);
      queueState.queue = action.queue;
      queueState.shuffledQueue = queueState.shuffle ? shuffle(action.queue) : action.queue.slice(0);
      return queueState;
    case ADD_SONG_QUEUE:
      const addedState = Object.assign({}, state);
      if (!addedState.queue.includes(action.songId)) {
        addedState.queue.push(action.songId);
        addedState.shuffledQueue.push(action.songId);
      }
      return addedState;
    case GET_QUEUE_POS:
      const posState = Object.assign({}, state);
      posState.queuePosition = posState.shuffledQueue.indexOf(posState.currentSong);
      return posState;
    case RECEIVE_NEXT_SONG:
      const nextState = Object.assign({}, state);
      if (nextState.queuePosition + 1 >= nextState.shuffledQueue.length) {
        if (nextState.repeat) {
          nextState.queuePosition = 0;
          nextState.currentSong = nextState.shuffledQueue[0];
        } else {
          nextState.queuePosition = -1;
          nextState.currentSong = null;
          nextState.isPlaying = false;
        }
      } else {
        nextState.queuePosition++;
        nextState.currentSong = nextState.shuffledQueue[nextState.queuePosition];
      }
      return nextState;
    case RECEIVE_PREV_SONG:
      const prevState = Object.assign({}, state);
      if (prevState.queuePosition - 1 < 0) {
        if (prevState.repeat) {
          prevState.queuePosition = prevState.shuffledQueue.length - 1;
          prevState.currentSong = prevState.shuffledQueue[prevState.shuffledQueue.length - 1];
        } else {
          prevState.queuePosition = -1;
          prevState.currentSong = null;
          prevState.isPlaying = false;
        }
      } else {
        prevState.queuePosition--;
        prevState.currentSong = prevState.shuffledQueue[prevState.queuePosition];
      }
      return prevState;
    case TOGGLE_REPEAT:
      const repeatState = Object.assign({}, state);
      repeatState.repeat = !repeatState.repeat;
      return repeatState;
    case TOGGLE_SHUFFLE:
      const shuffleState = Object.assign({}, state);
      if (shuffleState.shuffle) {
        shuffleState.shuffle = false;
        shuffleState.shuffledQueue = shuffleState.queue.slice(0);
        shuffleState.queuePos = shuffleState.shuffledQueue.indexOf(shuffleState.currentSong);
      } else {
        shuffleState.shuffle = true;
        const currentSongPosition = shuffleState.shuffledQueue.indexOf(shuffleState.currentSong);
        const shuffledSlice = shuffle(shuffleState.shuffledQueue.slice(0,currentSongPosition).concat(shuffleState.shuffledQueue.slice(currentSongPosition + 1)));
        shuffleState.shuffledQueue = [shuffleState.shuffledQueue[currentSongPosition]].concat(shuffledSlice);
        shuffleState.queuePosition = 0;
      }
      return shuffleState;
    default:
      return state;
  }
};

export default audioReducer;