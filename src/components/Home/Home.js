import classNames from "classnames/bind";
import styles from "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Home() {
  //toggle login-register
  const handleShowLogin = () => {
    document.querySelector("#form-login").style.display = "block";
  };
  const handleRemoveLogin = () => {
    document.querySelector("#form-login").style.display = "none";
  };
  const handleShowRegister = () => {
    document.querySelector("#form-register").style.display = "block";
  };
  const handleRemoveRegister = () => {
    document.querySelector("#form-register").style.display = "none";
  };

  return (
    <>
      <div className={cx("error")}>
        Chỉ sử dụng cho điện thoại có kích thước nhỏ hơn 414px
      </div>
      <div className={cx("wrapper")}>
        {/* form login */}
        <div id="form-login" className={cx("wrapper-form")}>
          <div className={cx("form-login")}>
            <h1 className={cx("form-title")}>ĐĂNG NHẬP</h1>
            <div className={cx("form-col")}>
              <div className={cx("form-col-title")}>Tài khoản</div>
              <input className={cx("form-col-input")} type="text" />
            </div>
            <div className={cx("form-col")}>
              <div className={cx("form-col-title")}>Mật khẩu</div>
              <input className={cx("form-col-input")} type="password" />
            </div>
          </div>
          <button className={cx("form-btn form-btn-login")}>Đăng nhập</button>
          <button
            className={cx("form-btn form-btn-back")}
            onClick={handleRemoveLogin}
          >
            Quay lại
          </button>
        </div>

        {/* form Register */}
        <div id="form-register" className={cx("wrapper-form")}>
          <div className={cx("form-register")}>
            <h1 className={cx("form-title")}>ĐĂNG KÝ</h1>
            <div className={cx("form-col")}>
              <div className={cx("form-col-title")}>Tài khoản</div>
              <input className={cx("form-col-input")} type="text" />
            </div>
            <div className={cx("form-col")}>
              <div className={cx("form-col-title")}>Mật khẩu</div>
              <input className={cx("form-col-input")} type="password" />
            </div>
            <div className={cx("form-col")}>
              <div className={cx("form-col-title")}>Email</div>
              <input className={cx("form-col-input")} type="email" />
            </div>
            <div className={cx("form-col")}>
              <div className={cx("form-col-title")}>Họ tên</div>
              <input className={cx("form-col-input")} type="text" />
            </div>
          </div>
          <button className={cx("form-btn form-register-btn-register")}>
            Đăng ký
          </button>
          <button
            className={cx("form-btn form-register-btn-back")}
            onClick={handleRemoveRegister}
          >
            Quay lại
          </button>
        </div>

        {/* home */}
        <FontAwesomeIcon icon={faBars} className={cx("menu-icon")} />
        <FontAwesomeIcon
          icon={faHeart}
          className={cx("menu-icon-heart menu-icon-heart-1")}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={cx("menu-icon-heart menu-icon-heart-2")}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={cx("menu-icon-heart menu-icon-heart-3")}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={cx("menu-icon-heart menu-icon-heart-4")}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={cx("menu-icon-heart menu-icon-heart-5")}
        />
        <div className={cx("title")}>Gia vị tình yêu</div>
        <div className={cx("btn-login")} onClick={handleShowLogin}>
          Đăng nhập
        </div>
        <div className={cx("btn-register")} onClick={handleShowRegister}>
          Đăng ký
        </div>
      </div>
    </>
  );
}

export default Home;
