import { useEffect, useState } from "react";
import { useTelegram } from "../../Hooks/useTelegram.ts";

const Home = () => {
  const { user } = useTelegram();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("This will log every 1 second!");
  //   }, 500);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return <div style={{ backgroundColor: "gray" }}>{user?.id}</div>;
};

export default Home;
