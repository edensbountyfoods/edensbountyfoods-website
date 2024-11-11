import React from "react";
import LoginScreen from "./login/login";
import AdminPanel from "./admin_panel/admin_panel";

const HomeScreen = ({ admin }) => {
  return <div>{admin ? <AdminPanel /> : <LoginScreen />}</div>;
};

export default HomeScreen;
