import React from "react";
import {useState, useEffect} from "react";
import {Container} from "./ViewProfile";
import DashboardSidebar from "../Dashboard/Dash-sidebar";
import DashboardHeader from "../Dashboard/Dash-header";
import "./view-profile.css";
import url_img from "./../../images/1.jpg";
import {useForm} from "react-hook-form";
import axios from "axios";
import {BASE_API, ROLES} from "../../App";

const ViewProfile = ({removeAuth}) => {
    const {register, handleSubmit} = useForm();
    let username = JSON.parse(localStorage.getItem("username"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(username)
        axios
            .get(BASE_API + `accounts/${username}/profile/?username=${username}`)
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                // handle error
            });
    }, []);
    return (
        <Container>
            <DashboardSidebar/>
            <DashboardHeader removeAuth={removeAuth}/>
            {user &&
            <div className="content-edit">
                <p> سلام {user.first_name} به سایت ما خوش آمدی</p>
                <div className="form-text">
                    <div className="row">
                        <div className="col1">
                            <label htmlFor="fname">نام</label>
                            <br/>
                            <h6>{user.first_name}</h6>
                        </div>
                        <div className="col1">
                            <label htmlFor="lname">نام خانوادگی</label>
                            <br/>
                            <h6>{user.last_name}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label htmlFor="lname">ایمیل</label>
                            <br/>
                            <h6>{user.email}</h6>
                        </div>
                        {user.role === 2 &&
                        <div className="col1">
                            <label htmlFor="bio">شرح حال</label>
                            <br/>
                            <h6>{user.bio}</h6>
                        </div>
                        }
                    </div>
                    <div className="col1">
                        <label htmlFor="lname">نقش کاربری</label>
                        <br/>
                        <h6>{ROLES[user.role]}</h6>
                    </div>
                </div>
            </div>}
        </Container>
    );
};

export default ViewProfile;
