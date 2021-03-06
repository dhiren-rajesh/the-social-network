import React from 'react'
import "./Header.css"
import logo from "./TSN.png"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton'
import { Avatar } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="the social network" className="logo"/>
            </div>
            <div className="header-input">
                <SearchIcon />
                <input placeholder="Search TSN" type="text"/>
            </div>
            <div className="header-center">
                <div className="header-option header-option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className="header-right">
                <div className="header-info">
                    <Avatar src="https://pbs.twimg.com/profile_images/1184114794103595010/021TqaVX.jpg"/>
                    <h4>Dhiren Rajesh</h4>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <QuestionAnswerIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
