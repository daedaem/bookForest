import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { setToken, getToken, removeToken } from "../utils/token";
import { FaShoppingCart } from "react-icons/fa";

const Header: React.FC = (props) => {
  const isToken = getToken();
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeToken();
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };
  const headerContent = isToken ? (
    <ul>
      <Link to="/" className={classes.link}>
        도서 목록
      </Link>
      <Link to="/editprofile" className={classes.link}>
        정보 수정
      </Link>
      <div className={classes.link} onClick={logoutHandler}>
        로그아웃
      </div>
    </ul>
  ) : (
    <ul>
      <Link to="/" className={classes.link}>
        도서 목록
      </Link>
      <Link to="/signup" className={classes.link}>
        회원가입
      </Link>
      <Link to="/login" className={classes.link}>
        로그인
      </Link>
    </ul>
  );

  return (
    <header className={classes.headers}>
      <div className={classes["header-content"]}>
        <Link to="/" className={classes.logo}>
          BookForest
        </Link>
        {headerContent}
        <Link to="/cart" className={`${classes.link} ${classes.cart}`}>
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
};
export default Header;
