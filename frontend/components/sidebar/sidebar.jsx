import React from 'react';

import SidebarNav from "./sidebar_nav";

class Sidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="sidebar-container">


        <div className="user-controls-container">
          <button onClick={() => this.props.logout()}>Sign Out</button>
        </div>
      </div>
    )
  }
}



