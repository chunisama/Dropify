import React from "react";

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            duration: null,
            volume: "1",
        };
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
    }

    componentDidMount(){
        this.props.fetchSongs();
        this.handleProgressBar();
        this.handleVolume();
    }

    isPlaying(){
        return !this.audio.paused;    
    }
    
    playAudio() {
        this.audio.play();
    }

    pauseAudio() {
        this.audio.pause();
    }

    handleVolume() {
        this.volume.onchange = (e) => {
            this.audio.volume = e.target.value;
        }
    }

    handleProgressBar() {
        this.range.value = 0;
        this.currentTimeInterval = null;

        this.audio.onloadedmetadata = () => {
            this.setState({duration: this.audio.duration})
        }


        this.audio.onplay = () => {
            this.currentTimeInterval = setInterval( () => {
                this.range.value = this.audio.currentTime;
            }, 500);
        };
        
        this.audio.onpause = () => {
            clearInterval(this.currentTimeInterval);
        };

        this.range.onchange = (e) => {
            clearInterval(this.currentTimeInterval);
            this.audio.currentTime = e.target.value;
            this.currentTimeInterval = setInterval(() => {
                this.range.value = this.audio.currentTime;
            }, 500);
        }
    }

    songExists(){
        if (this.props.songs.length >= 1) {
            return this.props.songs[0].songUrl;
        } else {
            return '';
        }
    }

    render(){
        return(
            <div>
                <audio ref={(audio) => { this.audio = audio }} src={this.songExists()}></audio>
                <input type="button" value="Play" onClick={() => this.playAudio()}/>
                <input type="button" value="Pause" onClick={() => this.pauseAudio()}/>
                <input type="range" ref={(range) => this.range = range} min="0" max={this.state.duration}/>
                <input type="range" ref={(volume) => this.volume = volume} min="0" step="0.01" max={this.state.volume}/>
            </div>
        )       
    }
}

export default Player;