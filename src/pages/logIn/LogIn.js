import logo from "../../logo.png";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Log_in() {
  return (
    <div className="log">
      <div className="img">
        <img src={logo}></img>
      </div>
      <div className="title">
        <h4>Đăng nhập</h4>
        <p>
          Chưa có tài khoản?{" "}
          <Link to="/signin/">
            <span>Đăng ký</span>
          </Link>
        </p>
      </div>
      <div className="info">
        <div className="log-user">
          <h5>Tên đăng nhập</h5>
          <input placeholder="Nhập email hoặc số điện thoại"></input>
        </div>
        <div className="log-passwords">
          <h5>Mật khẩu</h5>
          <input placeholder="Nhập mật khẩu"></input>
        </div>
      </div>
      <div className="button">
      <Button>Đăng nhập</Button>
      </div>
      
    </div>
  );
}
