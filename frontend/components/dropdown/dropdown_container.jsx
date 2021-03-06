import React from 'react';
import { connect } from 'react-redux';
import { removePlaylistSong } from '../../actions/playlist_song_actions';
import { closeDropdown } from '../../actions/dropdown_actions';
import { openModal, setModalComponent, setModalProps } from '../../actions/modal_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

class Dropdown extends React.Component {
  render() {
    const pos = {
      top: this.props.dropdown.pos.y,
      left: this.props.dropdown.pos.x,
    };

    const actions = [];

    // Adding song to playlist
    if (this.props.dropdown.dropdownProps.songId) {
      actions.push({
        title: 'Add to Playlist',
        func: () => {
          this.props.openModal();
          this.props.setModalComponent('add');
          this.props.setModalProps({songId: this.props.dropdown.dropdownProps.songId});
          this.props.closeDropdown();
        },
      });
    }

    // Removing song from playlist
    if (this.props.dropdown.dropdownProps.playlistId &&
      (this.props.currentUser.id === this.props.playlists[this.props.dropdown.dropdownProps.playlistId].user.id)) {
        actions.push({
          title: 'Remove from Playlist',
          func: () => {
            this.props.removePlaylistSong({
              playlist_id: this.props.dropdown.dropdownProps.playlistId,
              song_id: this.props.dropdown.dropdownProps.songId,
            });
            this.props.closeDropdown();
          },
        }); 
      }

    // Like
    const like = {
      user_id: this.props.currentUser.id,
      likeable_id: this.props.dropdown.dropdownProps.songId,
      likeable_type: 'Song',
    };
    // Removing Like
    if (this.props.currentUser.liked_song_ids.includes(this.props.dropdown.dropdownProps.songId)) {
      actions.push({
        title: 'Remove from your Liked Songs',
        func: () => {
          this.props.deleteLike(like);
          this.props.closeDropdown();
        },
      });
    } else {
      actions.push({
        title: 'Add to your Liked Songs',
        func: () => {
          this.props.createLike(like);
          this.props.closeDropdown();
        },
      });
    }
    
    const actionOptions = actions.map((action, idx) => (
      <li className="options" key={idx} onClick={action.func}>{action.title}</li>
    ));

    return(
      <div className={"dropdown-menu" + (this.props.dropdown.isOpen ? "" : "-hidden")} style={pos}>
        <ul className="dropdown-options">
          {actionOptions}
        </ul>
      </div>
      );
    }
  }

  const msp = state => ({
    dropdown: state.ui.dropdown,
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists
  });

  const mdp = dispatch => ({
    closeDropdown: () => dispatch(closeDropdown()),
    openModal: () => dispatch(openModal()),
    setModalProps: props => dispatch(setModalProps(props)),
    setModalComponent: type => dispatch(setModalComponent(type)),
    removePlaylistSong: song => dispatch(removePlaylistSong(song)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
  });

  export default connect(msp, mdp)(Dropdown);


