import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import classes from "./Login.module.css";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { setToken } from "../utils/token";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [users, setUsers] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const res = users.filter((user) => {
      return user.email === data.email && user.password === data.password;
    });
    if (res.length) {
      //이동예정
      setToken(data);
      console.log(data);
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
