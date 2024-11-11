import { Button } from "reactstrap";
import logo from "../../logo.png";
import "./SignIn.css";

export default function Sign_in() {
  return (
    <>
      <div className="sign">
        <div className="img">
          <img src={logo}></img>
        </div>
        <div className="title">
          <h4>Đăng ký tài khoản</h4>
        </div>
        <div className="info">
          <div className="sign-user">
            <h5>Tên tài khoản</h5>
            <input placeholder="Nhập email hoặc số điện thoại"></input>
          </div>
          <div className="sign-passwords">
            <h5>Mật khẩu</h5>
            <input placeholder="Nhập mật khẩu"></input>
          </div>
          <div className="check-passwords">
            <h5>Nhập lại mật khẩu</h5>
            <input placeholder="Nhập lại mật khẩu"></input>
          </div>
          <div className="sign-button">
            <Button >Đăng ký</Button>
          </div>
        </div>
      </div>
    </>
  );
}
