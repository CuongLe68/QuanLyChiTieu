import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Login.scss";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <div>Trang login</div>
      <Link to="/">Quay lại</Link>
    </div>
  );
}

export default Login;
