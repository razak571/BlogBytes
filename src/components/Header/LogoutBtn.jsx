import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className=" text-gray-400 inline-block px-6 py-2 duration-200 hover:text-indigo-700 "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
