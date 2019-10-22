import React from "react";
import PlaylistIndexItem from "./playlist_index_item";

class PlaylistIndex extends PlaylistIndex.Component {
  constructor(props){
    super(props);
  }
  
    componentDidMount(){
      this.props.fetchPlaylists();
    }

    render(){
      if (this.props.songs.length == 0){
        return (
          <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
        )
      }
      const playlistIndexItems = () => {
        requestAnimationFrame(
          <div className="playlist-index-container">
            <ul className="playlist=index">
              {this.props.playlists.map((playlist) => (
                <PlaylistIndexItem
                  playlist={playlist}
                  key={playlist.id}
                />
              ))}
            </ul>
          </div>
        )
      }


      return(
        <div></div>
      )
    }
}