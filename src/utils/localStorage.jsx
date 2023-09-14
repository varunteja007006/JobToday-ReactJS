export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const addThemeToLocalStorage = (theme) => {
  localStorage.setItem("theme", JSON.stringify(theme));
};

export const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return JSON.parse(theme);
  }
  return "light";
};
