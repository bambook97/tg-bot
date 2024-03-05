import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useTelegram } from "../Hooks/useTelegram.ts";

export interface AdminContextProps {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}
export const AdminContext = createContext<AdminContextProps>({
  isAdmin: false,
  setIsAdmin: () => {},
});

export const AdminProvider = ({ children }: PropsWithChildren) => {
  const [admin, setAdmin] = useState(false);
  const { user } = useTelegram();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:8000/is_admin?id=${865683835}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setAdmin(data.success);
    };
    fetchData();
  }, [user]);

  return (
    <AdminContext.Provider value={{ isAdmin: admin, setIsAdmin: setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
