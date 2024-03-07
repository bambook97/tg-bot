import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import style from "./home.module.scss";
import { AdminContext } from "../../lib/adminContext.tsx";
import backImage from "/src/Assets/back.webp";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("Connecting...");

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch("http://localhost:8000/info", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setValue(data.success.info);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { isAdmin } = useContext(AdminContext);

  return (
    <div className={style.wrapper}>
      <img src={backImage} alt={""} className={style.img} />
      <span className={style.loader}>{value}</span>
      <button className={style.btn} onClick={() => navigate("/admin")}>
        Go to admin
      </button>
    </div>
  );
};

export default Home;
