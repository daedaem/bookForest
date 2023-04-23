export const setToken = (user) => {
  const token = `${user.id}_${new Date().getTime()}`;
  localStorage.setItem("access_token", token);
};

export const getToken = () => {
  const isLogin = localStorage.getItem("access_token");
  if (!isLogin) return null;

  return true;
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
};
