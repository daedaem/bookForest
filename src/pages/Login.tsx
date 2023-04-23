import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import classes from "./Login.module.css";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { getToken, setToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import { userData } from "../types/user";

const Login = () => {
  const [users, setUsers] = useRecoilState(userState);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>();

  const onSubmit = (data: userData) => {
    const user = users.find(
      (user: userData) =>
        user.email === data.email && user.password === data.password
    );

    if (user) {
      // 로그인에 성공한 경우, 세션에 사용자 정보를 저장
      setToken(user.id);
      navigate("/");
    } else {
      alert("정확한 이메일 주소와 비번을 입력해주세요.");
    }
  };

  return (
    <section className={classes.loginSection}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FormInput
          label="email"
          name="email"
          register={register}
          validation={{ required: "올바른 email을 입력해주세요" }}
          type="email"
          errors={errors}
          fields={["username", "email", "password"]}
        />
        <FormInput
          label="Password"
          name="password"
          register={register}
          validation={{ required: "올바른 비밀번호를 입력해주세요" }}
          type="password"
          errors={errors}
          fields={["username", "email", "password"]}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
