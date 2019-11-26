import React from "react";
import PlaylistIndexItem from "./playlist_index_item";

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class PlaylistIndex extends React.Component {
  constructor(props){
    super(props);
  }
  
    componentDidMount(){
      this.props.fetchPlaylists({
        // playlist_ids: this.props.playlistIds,
        search_term: this.props.searchTerm  
      });
    }

    // componentDidUpdate(prevProps){
    //   if (
    //     (prevProps.playlistIds && !arrayEq(this.props.playlistIds, prevProps.playlistIds)) ||
    //     (prevProps.searchTerm && this.props.searchTerm !== prevProps.searchTerm) ||
    //     (prevProps.playlists.length !== this.props.playlists.length)
    //   ) {
    //     this.props.fetchPlaylists({
    //       playlist_ids: prevProps.playlistIds,
    //       search_term: prevProps.searchTerm
    //     });
    //   }
    // }

    render(){
      // if (this.props.playlists.length === 0){
      //   return (
      //     <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      //   )
      // }

      let filteredPlaylists;
      if (this.props.searchTerm) {
        filteredPlaylists = this.props.playlists.filter(playlist => playlist.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
      } else {
        filteredPlaylists = this.props.playlists;
      }

      let sortedPlaylists;
      if (this.props.playlistIds) {
        sortedPlaylists = this.props.playlistIds.map(id => filteredPlaylists.find(obj => obj.id === id ))
      } else {
        sortedPlaylists = filteredPlaylists;
      }
  
      const playlistIndexItems = () => {
        return(
        sortedPlaylists.map((playlist) => (
          <PlaylistIndexItem
            playlist={playlist}
            key={playlist.id}
          />
        ))
      )};

      return(
        <div className="playlist-index-container">
          <ul className="flex-master">
            {playlistIndexItems().length ? playlistIndexItems() : <p>No Playlists</p>}
          </ul>
        </div>
      )
    }
}

export default PlaylistIndex;