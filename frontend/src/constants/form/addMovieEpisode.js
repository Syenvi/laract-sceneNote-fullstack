import * as yup from "yup";
export const addMovie = {
  initialValues: {
    episode: "",
    video: "",
    notes: [],
    images: [],
  },
  schema: yup.object().shape({
    episode: yup.string().required("Title required"),
    video: yup.string(),
    notes: yup.array(),
    images: yup.array(),
  }),
};
