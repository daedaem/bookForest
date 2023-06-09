import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import classes from "./Signup.module.css";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { useNavigate } from "react-router-dom";
import { userData } from "../types/user";

const Signup = () => {
  const [users, setUsers] = useRecoilState(userState);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: userData) => {
    const res = users.filter(
      (user: userData) =>
        user.username == data.username || user.email == data.email
    );
    if (res.length) alert("이미 가입된 유저네임 또는 이메일입니다.");
    else {
      setUsers((prev) => [...prev, { ...data, id: users.length + 1 }]);
      alert("signup success");
      navigate("/login");
    }
  };

  return (
    <section className={classes.signupSection}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FormInput
          label="Username"
          name="username"
          register={register}
          validation={{ required: "올바른 유저명을 입력해주세요" }}
          type="text"
          errors={errors}
          fields={["username", "email", "password"]}
        />
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
        <button type="submit">Signup</button>
      </form>
    </section>
  );
};

export default Signup;
