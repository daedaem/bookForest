import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import classes from "./Signup.module.css";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";

type FormData = {
  username: string;
  password: string;
};

const Signup = () => {
  const [users, setUsers] = useRecoilState(userState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const res = users.filter(
      (user) => user.name == data.username || user.email == data.email
    );
    if (res.length) alert("이미 가입된 유저네임 또는 이메일입니다.");
    else {
      setUsers((prev) => [...prev, data]);
      alert("signup success");
      //이동하자
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
