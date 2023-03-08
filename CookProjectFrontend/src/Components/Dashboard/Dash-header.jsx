import React from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import {useNavigate} from 'react-router-dom';
import "./Dashboard.css";
import url_img from "./../../images/1.jpg";
import axios from "axios";
import {BASE_API, check_error} from "../../App";
import { updateLogin, useLogin } from "../../hooks/useLogin";

const DashboardHeader = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
        updateLogin("unauth");
    }
    const user = useLogin();
    
    return (
        <div className="web-header">
            <div className="element">
                <div>خوش آمدید {user.username}</div>
                <NotificationsOutlinedIcon className="m2-icon"/>
                <ChatBubbleOutlineOutlinedIcon className="m2-icon"/>
                <ShoppingCartOutlinedIcon className="m2-icon"/>
                <div className="logout" onClick={logout}>
                    <LogoutIcon className="m2-icon"/>
                </div>
                <img src={url_img} alt="profile-user" className="avatar"></img>
            </div>
        </div>
    );
};

export default DashboardHeader;
