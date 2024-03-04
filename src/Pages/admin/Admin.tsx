import { AdminForm } from "../../Components/AdminForm/AdminForm.tsx";
import style from "./admin.module.scss";

const Admin = () => {
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
      <AdminForm initValue={""} />
      <AdminForm initValue={"Connecting..."} />
    </div>
  );
};

export default Admin;
