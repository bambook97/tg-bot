// import { useTelegram } from "../../Hooks/useTelegram.ts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./home.module.scss";

const Home = () => {
  // const { user } = useTelegram();
  const navigate = useNavigate();
  const [admin] = useState(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will log every 1 second!");
  //   }, 500);
  //
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    if (admin) {
      navigate("/admin");
    }
  }, [admin]);

  return (
    <div
      style={{
        height: "100vh",
        background: "purple",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "150px",
      }}
    >
      <span className={style.loader}>Сonnecting</span>
      <button className={style.btn} onClick={() => navigate("/admin")}>
        Go to admin
      </button>
    </div>
  );
};

export default Home;
