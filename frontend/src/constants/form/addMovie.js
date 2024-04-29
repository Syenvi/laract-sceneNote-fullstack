import * as yup from "yup";
export const addMovie = {
  initialValues: {
    title: "",
    img: "",
    description: "",
  },
  schema: yup.object().shape({
    title: yup.string().required("Title required"),
    img: yup.string(),
    description: yup.string(),
  }),
};
