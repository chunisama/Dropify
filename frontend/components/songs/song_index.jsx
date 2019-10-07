import React from "react";

class SongIndex extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    currentSong: "",
    };
  }

  componentDidMount(){
    this.props.fetchSongs();
  }
  
  testSongs(){
    const songs = this.props.songs.map((song) => {
      return(
        <div className="test" onClick={() => this.props.receiveCurrentSong(song)}>{song.title}</div>
      )
    })
    return songs;
  }

  handleCurrentSong(e){
    e.preventDefault();
    this.props.fetchSong(e.target.value.id);
  }

  render(){
    return(
      <div>
        adsfsdfasdf
        {this.testSongs()}
      </div>
    )
  }

}


export default SongIndex;