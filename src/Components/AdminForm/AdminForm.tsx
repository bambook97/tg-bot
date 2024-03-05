import { useFormik } from "formik";

interface Props {
  initValue?: string;
}
export const AdminForm = ({ initValue }: Props) => {
  const formik = useFormik({
    initialValues: {
      textMessage: initValue || "",
    },
    onSubmit: () => onSubmit(formik.values),
  });
  const onSubmit = async (values) => {
    const response = await fetch("http://localhost:8000/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ info: values.textMessage }),
    });
    if (response.ok) {
      console.log("ok");
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="textMessage"
        id="textMessage"
        onChange={formik.handleChange}
        value={formik.values.textMessage}
      />
      <button type="submit">Сохранить</button>
    </form>
  );
};
