import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import classes from "./EditProfile.module.css";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { getToken, getUserIdFromToken } from "../utils/token";
import { userData } from "../types/user";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [users, setUsers] = useRecoilState(userState);
  const navigate = useNavigate();
  const userId = getUserIdFromToken(getToken());
  const currentUser = users.find((user) => user.id === +userId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({
    defaultValues: {
      username: currentUser?.username || "",
      email: currentUser?.email || "",
      password: "",
    },
  });

  const onSubmit = (data: userData) => {
    const token = getToken();
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }
    const userId = getUserIdFromToken(token);
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }
    const newUserList = users.map((user) => {
      if (user.id === +userId) {
        return { ...user, ...data };
      } else {
        return user;
      }
    });

    setUsers(newUserList);
    alert("회원 정보가 수정되었습니다.");
    navigate("/");
  };

  return (
    <section className={classes.editProfileSection}>
      <h1>회원 정보 수정</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FormInput
          label="Username"
          name="username"
          register={register}
          validation={{ required: "올바른 유저명을 입력해주세요" }}
          type="text"
          errors={errors}
          defaultValue={currentUser?.username}
          fields={["username", "email", "password"]}
        />
        <FormInput
          label="Email"
          name="email"
          register={register}
          validation={{ required: "올바른 이메일을 입력해주세요" }}
          type="email"
          errors={errors}
          defaultValue={currentUser?.email}
          fields={["username", "email", "password"]}
        />
        <FormInput
          label="Password"
          name="password"
          register={register}
          validation={{ required: "올바른 비밀번호를 입력해주세요" }}
          type="string"
          errors={errors}
          defaultValue={currentUser?.password}
          fields={["username", "email", "password"]}
        />
        <button type="submit">저장</button>
      </form>
    </section>
  );
};

export default EditProfile;
