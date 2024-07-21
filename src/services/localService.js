export const userLocal = {
  set: (infoUser) => {
    let json = JSON.stringify(infoUser);
    localStorage.setItem("USER_INFO", json);
  },
  get: () => {
    let jsonUserInfo = localStorage.getItem("USER_INFO");
    if (jsonUserInfo) {
      return JSON.parse(jsonUserInfo);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem("USER_INFO");
  },
};
