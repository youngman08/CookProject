import React, {useState, useEffect} from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar-second";
import axios from "axios";
import chief_profile_img from "../../images/chief_profile.jpg";
import {
    ChiefCard,
    ChiefContainer,
    ChiefH1,
    ChiefH2,
    ChiefImage,
    ChiefP,
    ChiefWrapper,
} from "./chief_profile";
import {useParams} from "react-router";

const ChiefProfile = () => {
    const [chiefDetail, setChiefDetail] = useState({"username": "first"});
    const params = useParams()
    const chief = params.chief
    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/accounts/${chief}/profile/`;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setChiefDetail(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Sidebar/>
            <Navbar/>


            <ChiefContainer>
                <ChiefH1>پروفایل آشپز {chiefDetail.username}</ChiefH1>
                <ChiefWrapper>
                    <ChiefCard>
                        {/*<ChiefImage src={chief_profile_img}></ChiefImage>*/}
                        <ChiefH2>{chiefDetail.first_name} {chiefDetail.last_name}</ChiefH2>
                        <ChiefP>{chiefDetail.bio}</ChiefP>

                        <a href={"mailto: " + chiefDetail.email + "?subject=Mail from Cookommunity"}>سوالات خود را
                            بپرسید!</a>

                    </ChiefCard>
                </ChiefWrapper>
            </ChiefContainer>

        </>
    );
};

export default ChiefProfile;
