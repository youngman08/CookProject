import React from "react";
import { Container} from "./Dash-promotion";
import DashboardSidebar from "../Dashboard/Dash-sidebar";
import DashboardHeader from "../Dashboard/Dash-header";
import "./dash-promotion.css";
const DashPromotionComponent = ({removeAuth}) => {
  return (
    <Container>
      <DashboardSidebar />
      <DashboardHeader removeAuth={removeAuth}/>
      <div className="content-edit">
      <p className="content-promotion"> سلام علی به سایت ما خوش آمدی</p>
      <h2 className="content-promotion">درخواست ارتقای حساب کاربری</h2>
      <p className="content-promotion"> در صورت درخواست هزینه 100 هزار تومن از حساب شما کسر شده و جزو اعضای ویژه ی سایت قرار خواهید گرفت</p>
        <div className="d-button"><button type="button" className="f-button">ثبت نام</button></div>
        </div>
    </Container>
  );
};

export default DashPromotionComponent;
