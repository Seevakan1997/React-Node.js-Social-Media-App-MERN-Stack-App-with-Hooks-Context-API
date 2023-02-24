import React from 'react'
import "./topbar.css"
import { Search as SearchIcon, Person as PersonIcon, Chat as ChatIcon, Notifications  as NotoficationsIcon } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbarContainer'>

        <div className='topbarLeft'>
        <spam className='logo'>StarKing</spam>
        </div>

        <div className='topbarCenter'>
            <div className='searchbar'>
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search here...' className='searchInput'></input>
            </div>
        </div>

        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbariconItem'>
                    <PersonIcon/>
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbariconItem'>
                    <ChatIcon/>
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className='topbariconItem'>
                    <NotoficationsIcon/>
                    <span className='topbarIconBadge'>1</span>
                </div>
            </div>
            <img src='/assets/2.jpg' className='topbarImage'/>
        </div>


    </div>
  )
}
