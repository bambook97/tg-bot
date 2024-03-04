import { useFormik } from "formik";

interface Props {
  initValue?: string;
}
export const AdminForm = ({ initValue }: Props) => {
  const formik = useFormik({
    initialValues: {
      textMessage: initValue || "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
