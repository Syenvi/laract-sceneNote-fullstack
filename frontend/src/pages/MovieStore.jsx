import { Button } from "../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/elements/input/input";
import { useCreateMovie } from "../services/movie/useCreateMovie";
import { useNavigate } from "react-router-dom";

const MovieStore = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    title: yup.string().required("Title Required"),
    description: yup.string(),
    image: yup.string(),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      title: "",
      excerpt: "",
      description: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading: loadingCreateMovie } = useCreateMovie({
    onSuccess: () => {
      navigate("/");
    },
  });
  const submitForm = async (values) => {
    const excerpt = values.title.toLowerCase().replace(/\s+/g, "-");
    setValue("excerpt", excerpt);
    await mutate(values);
  };
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitForm)}
    >
      <Input
        register={{ ...register("title", { required: true }) }}
        label="Title"
        error={errors?.title?.message}
        touchedField={touchedFields?.title}
        type="text"
      />
      <Input
        register={{ ...register("description") }}
        label="Description"
        error={errors?.description?.message}
        touchedField={touchedFields?.description}
        type="text"
      />
      <Input
        register={{ ...register("image") }}
        label="Image Link"
        error={errors?.image?.message}
        touchedField={touchedFields?.image}
        type="text"
      />
      <Button variant="primary" type="submit">
        {loadingCreateMovie ? "Loadin..." : "Submit"}
      </Button>
    </form>
  );
};

export default MovieStore;
