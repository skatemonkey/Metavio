import React, { Component } from 'react';
import Identicon from 'identicon.js';
import './Sidebar.css';
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import photo from '../photo.png'
import SidebarLink from './SidebarLink';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar sm:flex xl:items-start xl:w-[340px]">

        {/* Metavio Icon */}
        <div
          className="metavio_icon xl:ml-24"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={photo} width="30" height="30" className="" alt="" />
        </div>

        {/* Return Individual icon */}
        <div className='individual_icon xl:ml-24 space-y-2.5'>
          <SidebarLink text="Home" Icon={HomeIcon} active />
          <SidebarLink text="Explore" Icon={HashtagIcon} />
          <SidebarLink text="Notifications" Icon={BellIcon} />
          <SidebarLink text="Messages" Icon={InboxIcon} />
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink text="Lists" Icon={ClipboardListIcon} />
          <SidebarLink text="Profile" Icon={UserIcon} />
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        </div>

        {/* User profile */}
        <div className='userprofile xl:ml-auto xl:-mr-5'>

          {this.props.account
            ? <img
              className='userprofilepic xl:mr-2.5'
              // width='30'
              // height='30'
              src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
            />
            : <span></span>
          }
          <div className='account_address xl:inline'>
            <small id="account">{this.props.account}</small>
          </div>
        </div>

      </div>
    );
  }
}

export default Sidebar;