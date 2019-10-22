import React from 'react';

class PlaylistIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    <li>
      <div className="playlist-index-item">
        <div className="playlist-cover">
          <img className="content-photo-square" src="" />
        </div>
        <div className="playlist-details">
          <div className="playlist-title">
            {this.props.playlist.title}
          </div>
          <div className="playlist-user">
            {this.props.playlist.user.name}
          </div>
        </div>
      </div>
    </li>
  }
}

export default PlaylistIndexItem;