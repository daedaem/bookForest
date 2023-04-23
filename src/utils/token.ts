export const setToken = (userId: number) => {
  const token = `${userId}_${new Date().getTime()}`;
  sessionStorage.setItem("access_token", token);
};

export const getToken = () => {
  const token = sessionStorage.getItem("access_token");
  if (!token) return null;

  return token;
};

export const removeToken = () => {
  sessionStorage.removeItem("access_token");
};

export const getUserIdFromToken = (token: string | null) => {
  if (!token) return null;
  return token.split("_")[0];
};
