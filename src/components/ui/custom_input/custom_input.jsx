import React from "react";
import styles from './custom_input.module.scss'
const CustomInput = (props) => {
  return <input {...props} className={styles.CustomInput}/>;
};

export default CustomInput;
