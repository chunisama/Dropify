import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import SidebarContainer from "./sidebar/sidebar_container";
import PlayerContainer from "./player/player_container";
import Browse from "./browse/browse";
import AlbumShow from "./albums/album_show";
import ArtistShow from "./artists/artist_show";
import PlaylistShow from "./playlists/playlist_show_container";
import ModalContainer  from "./modals/modal_container";
import DropdownContainer from "./dropdown/dropdown_container";
import { closeDropdown } from "../actions/dropdown_actions";

const Main = (props) => {
  return (
    <>
      <div className="main-wrapper" onClick={() => { if(props.dropdownOpen) props.closeDropdown();}}>
        <div className="background">
          <Route path="/:section" component={ SidebarContainer }></Route>
          <Route path="/browse" component={ Browse }></Route>
          <Route path="/albums/:albumId" component={ AlbumShow }></Route>
          <Route path="/artists/:artistId" component={ ArtistShow }></Route>
          <Route path="/playlists/:playlistId" component={ PlaylistShow }></Route>
          <Route path="/collection" ></Route>
        </div>
      </div>
      <PlayerContainer />
      <ModalContainer />
      <DropdownContainer />
    </>
  )
}

const msp = state => ({
  dropdownOpen: state.ui.dropdown.isOpen,
});

const mdp = dispatch => ({
  closeDropdown: () => dispatch(closeDropdown()),
})

export default connect(msp, mdp)(Main);