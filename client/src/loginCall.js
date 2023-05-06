import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthActions";

export const loginCall = async (userCredential, dispatch) => {
  dispatch(LoginStart(userCredential));
  try {
    const res = await axios.post("http://localhost:5000/api/login", userCredential);
    console.log(res.data, "login data")
    if (res.data.user.email !== undefined) {
      dispatch(LoginSuccess(res.data.user));
      localStorage.setItem("token", res.data.token);
    } else {
      dispatch(LoginFailure("Đăng nhập lỗi"));
    }
  } catch (err) {
    console.log(err);
  }
};