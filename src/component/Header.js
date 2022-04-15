import React from "react";
import "../css/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon  from "@material-ui/icons/ArrowBackIos";
import {Link, useHistory} from 'react-router-dom';

function Header({backButton}){
    return(
        <div className="header">
            {backButton ? (
                <Link to="/">
                    <IconButton>
                        <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                    </IconButton>    
                </Link>
            ):(
                <IconButton>
                   <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
            <Link to="/">
                <img
                    className="header_logo"
                    src ="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                    alt="tiner logo"
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header