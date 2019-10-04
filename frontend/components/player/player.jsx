import React from "react";

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.fetchSongs();
        debugger
    }
    handlePlay() {
        this.audio.play();
    }


    songExists(){
        if (this.props.songs.length >= 1) {
            return this.props.songs[0].songUrl;
        } else {
            return '';
        }
    }

    render(){
        const { songs } = this.props;
        debugger
        return(
            <figure>
                <audio src={this.songExists()}></audio>
            </figure>
        )       
    }
}

// { `${songs[0].songUrl}` }
export default Player;