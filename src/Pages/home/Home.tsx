import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import style from "./home.module.scss";
import { AdminContext } from "../../lib/adminContext.tsx";
import { useTelegram } from "../../Hooks/useTelegram.ts";

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("Connecting...");
  const { user } = useTelegram();

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
      {isAdmin && (
        <button className={style.btn} onClick={() => navigate("/admin")}>
          Go to admin
        </button>
      )}
      <h1>{user}</h1>

      <span className={style.loader}>{value}</span>
    </div>
  );
};

export default Home;
