import { AdminForm } from "../../Components/AdminForm/AdminForm.tsx";

const Admin = () => {
  return (
    <div>
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
