import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Register.scss";

const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <div>trang đăng ký</div>
      <Link to="/">quay lại</Link>
    </div>
  );
}

export default Register;
