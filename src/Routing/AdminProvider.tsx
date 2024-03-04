import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AdminProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  useEffect(() => {
    // if (isAdmin) {
    navigate("/admin");
    // }
  }, []);
  return <>{children}</>;
};
