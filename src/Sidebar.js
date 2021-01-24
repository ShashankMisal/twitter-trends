import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import "./Sidebar.css"
import {NavLink} from 'react-router-dom'



function Sidebar() {
    return (
        <div className="sidebar">

          
            <TwitterIcon className="sidebar__twitterIcon"/>

        <NavLink to="/" style={{color:"black"}} activeStyle={{color:'var(--twitter-color)',textDecoration:"none"}}>
            <SidebarOption
                Icon={<HomeIcon className="sidebar_clickableIcon"/>}
                text={"Home"}
            />
        </NavLink> 

            <NavLink to="/Explore" activeStyle={{ color:'var(--twitter-color)'}} style={{textDecoration:"none",color:"black"}}>
                <SidebarOption
                    Icon={<SearchIcon className="sidebar_clickableIcon"/>}
                    text={"Explore"}
                    />
            </NavLink>
            
            <SidebarOption
                Icon={<NotificationsNoneIcon />}
                text={"Notifications"}
            />
            
            <SidebarOption
                Icon={<MailOutlineIcon />}
                text={"Messages"}
            />
            
            <SidebarOption
                Icon={<BookmarkBorderIcon />}
                text={"BookMarks"}
            />
            
            <SidebarOption
                Icon={<ListAltIcon />}
                text={"List"}
            />
            
            <SidebarOption
                Icon={<PermIdentityIcon />}
                text={"Profile"}
            />
            
            <SidebarOption
                Icon={<MoreHorizIcon />}
                text={"More"}
            />
           


            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>

        </div>
    )
}

export default Sidebar
