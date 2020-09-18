import { auth } from "../firebase";

export const authCheck = (setAuthId) => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      const authId = user.uid;
      setAuthId(authId);
    } else {
      setAuthId(null);
    }
  });
};

export const logout = (setAuthId) => {
  auth
    .signOut()
    .then(function () {
      setAuthId(null);
    })
    .catch(function (error) {
      console.log(error);
    });
};