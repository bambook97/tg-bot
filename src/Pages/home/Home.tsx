import { useEffect, useState } from "react";

const Home = () => {
  const tg = window.Telegram.WebApp;
  const [data, setData] = useState("");
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will log every 1 second!");
  //   }, 500);
  //
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    setData(tg.initData);
  }, []);

  return <div style={{ backgroundColor: "gray" }}>{data}</div>;
};

export default Home;
