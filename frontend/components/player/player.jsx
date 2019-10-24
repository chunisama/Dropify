import React from "react";
import { Link } from "react-router-dom";

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            duration: null,
            volume: "1",
            formattedDuration: null,
            formattedTimer: null,
            currentSong: "",
            currentAlbum: "",
        };
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidMount(){
        // this.props.fetchSongs();
        // this.props.fetchAlbums();
        // this.props.fetchArtists();
        this.handleProgressBar();
        this.handleVolume();
        this.setDuration();
        this.setTimer();
        this.toggleIsPlaying();
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.song !== this.props.song){
            this.setState({currentSong: this.props.song, 
                currentAlbum: this.props.albums[this.props.song.album_id],
            })
        }
        if (prevProps.currentlyPlaying !== this.props.currentlyPlaying){
            if (this.props.currentlyPlaying == false) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
        }
    }

    // componentWillUnmount(){
    //     this.audio.pause();
    //     this.setState({formattedTimer: ""});
    //     clearInterval(this.currentTimeInterval);
    // }

    toggleIsPlaying(){
        this.audio.onplay = () => {
            this.props.isPlaying(true);
            const pause = document.getElementById("play-pause");
            pause.className = "fas fa-pause";
        }
        this.audio.onpause = () => {
            this.props.isPlaying(false);
            const play = document.getElementById("play-pause");
            play.className = "fas fa-play";
        }
    }

    togglePlay(){
        return this.audio.paused ? this.audio.play() : this.audio.pause();  
    }

    toggleLooper(){
        if (this.audio.loop == false){
            this.audio.loop = true;
        } else if (this.audio.loop == true){
            this.audio.loop = false;
        }
    }


    handleVolume(){
        this.volume.onchange = (e) => {
            this.audio.volume = e.target.value;
        }
    }

    setDuration() {
        this.audio.onloadedmetadata = () => {
            this.setState({duration: this.audio.duration, formattedDuration: new Date(this.audio.duration * 1000).toISOString().substr(15, 4)});
        };
    }

    setTimer() {            
        this.audio.ontimeupdate = () => {
            this.setState({formattedTimer: new Date(this.audio.currentTime * 1000).toISOString().substr(15,4)});
        }
    }

    updateTimer(){
        return (e) => {
            this.setState({formattedTimer: new Date(e.target.value * 1000).toISOString().substr(15,4)});
        }      
    }
    
    handleProgressBar() {
        this.range.value = 0;
        this.currentTimeInterval = null;
        this.audio.onplaying = () => {
            this.currentTimeInterval = setInterval(() => {
                this.range.value = this.audio.currentTime;
            }, 500);
        };
  
        this.audio.onpause = () => {
            clearInterval(this.currentTimeInterval);
        };
        
        this.range.oninput = (e) => {
            clearInterval(this.currentTimeInterval);
            this.audio.currentTime = e.target.value;
        }
    }



    //for testing
    songExists(){
        if (this.props.songs.length >= 1) {
            return this.props.songs[2].songUrl;
        } else {
            return '';
        }
    }

    render(){
        return(
    <footer className="player-container">
        <div className="inner-wrap">
            <div className="left-container">
                <div className="currentSongInfo">
                    <div className="currentSongArtwork">
                    <Link to={`/albums/${this.state.currentAlbum.id}`}>
                        <img className="currentSongArt" src={this.state.currentAlbum.photoUrl}/>
                    </Link>
                    </div>
                    <div className="currentSong-text">
                        <Link className="song-title"to={`/albums/${this.state.currentAlbum.id}`}>
                            {this.state.currentSong.title}
                        </Link>
                        <Link className="artist-name"to={`/artists/${this.state.currentAlbum.artistId}`}>
                            {this.state.currentAlbum.artist}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="center-container">
                <div className="player">
                    <audio ref={(audio) => { this.audio = audio }} src={this.state.currentSong.songUrl} autoPlay loop={false} ></audio>
                    <div className="player-controls">
                        <button className="toggle-shuffle"><img className="shuffle-icon" src={window.shuffleURL}/></button>
                        <button className="toggle-previous"><img className="previous-icon" src={window.previousURL}/></button>
                        <button className="toggle-player" onClick={() => this.togglePlay()}><i id="play-pause" className={"fas fa-play"}></i></button>
                        <button className="toggle-next"><img className="next-icon" src={window.nextURL}/></button>
                        <button className="toggle-looper" onClick={() => this.toggleLooper()}><img className="looper-icon" src={window.looperURL}></img></button>
                    </div>
                    <div className="timer-controls">
                        <div className="duration"ref={(currentDuration) => {this.currentDuration = currentDuration}}>{this.state.formattedTimer}</div>
                        <input type="range" onInput={this.updateTimer()}ref={(range) => this.range = range} min="0" max={this.state.duration}/>
                        <div className="duration"ref={(totalDuration) => {this.totalDuration = totalDuration}}>{this.state.formattedDuration}</div>
                    </div>
                </div>
            </div>
            <div className="misc-controls">
                <div className="sound-container">
                    <img className="volume-icon" src={window.volumeURL} />
                    <input type="range" ref={(volume) => this.volume = volume} min="0" step="0.01" max={this.state.volume}/>
                </div>
            </div>
        </div>
    </footer>
        )       
    }
}

export default Player;