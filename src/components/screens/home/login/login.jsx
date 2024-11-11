import React from "react";
import styles from "./login.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

const LoginScreen = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        "admin@edensbountyfoods.com",
        "edensadmin@2024"
      );
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className={styles.LoginScreen}>
      <form onSubmit={handleLogin}>
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" type="password" />
        <input className={styles.btn} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginScreen;
