import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts/fonts";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

export default function App({ Component, pageProps }) {
  const [admin, setAdmin] = useState(null);

 


  useEffect(() => {
    onAuthStateChanged(auth, (session) => {
      setAdmin(session);
    });
  }, []);

  return (
    <>
      <main
        className={`
      
    fonts.font1
      
      ${styles.body}`}
      >
        <Layout
      
        >
          <Component
            {...pageProps}
          
            admin={admin}
          />
        </Layout>
      </main>
    </>
  );
}
