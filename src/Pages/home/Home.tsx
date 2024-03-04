// import { useTelegram } from "../../Hooks/useTelegram.ts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

  return <button onClick={() => navigate("/admin")}>Go to admin</button>;
};

export default Home;
