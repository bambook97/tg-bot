import { AdminForm } from "../../Components/AdminForm/AdminForm.tsx";
import style from "./admin.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../lib/adminContext.tsx";

const Admin = () => {
  const navigate = useNavigate();
  const { isAdmin } = useContext(AdminContext);
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  });
  return (
    <div className={style.wrapper}>
      <h1>Admin Panel</h1>
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={""} />
      <AdminForm initValue={"Connecting..."} />
      <button onClick={() => navigate("/")}>Go to preview</button>
    </div>
  );
};

export default Admin;
