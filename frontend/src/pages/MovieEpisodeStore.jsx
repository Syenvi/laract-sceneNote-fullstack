import { Button } from "../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/elements/input/input";
import Select from "react-select";
import { useState } from "react";
import { useFetchMovies } from "../services/movie/useFetchMovies";
import { useNavigate } from "react-router-dom";
import { useCreateEpisode } from "../services/movie/useCreateEpisode";

const MovieEpisodeStore = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState([]);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  //fetch movie
  const { data, isLoading } = useFetchMovies();

  const schema = yup.object({
    movie_id: yup.number().required("Movie Required"),
    episode: yup.string().required("Episode Required"),
    video: yup.string(),
  });
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      movie_id: "",
      episode: "",
      video: "",
    },
    resolver: yupResolver(schema),
  });

  const options = data?.data?.data?.map((movie) => {
    return { value: movie.id, label: movie.title };
  });
  const handleSelectChange = (selectedOption) => {
    setValue("movie_id", parseInt(selectedOption.value));
  };

  const addNote = () => {
    setNotes([...notes, note]);
    setNote("");
  };
  const addImage = () => {
    setImages([...images, image]);
    setImage("");
  };

  const { mutate, isLoading: loadingCreateMovie } = useCreateEpisode({
    onSuccess: () => {
      navigate("/");
    },
  });
  const submitForm = async (values) => {
    notes?.map((item, id) => setValue(`notes[${id}][note]`, item));
    images?.map((item, id) => setValue(`images[${id}][image]`, item));
    console.log(values);
    await mutate(values);
  };
  const deleteImage = (id) => {
    const updatedImages = [...images]; // Salin array notes
    updatedImages.splice(id, 1); // Hapus item dari salinan array
    setImages(updatedImages); // Atur state baru dengan array yang sudah diperbarui
    setValue("images", updatedImages);
  };
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitForm)}
    >
      <Select
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "#1A161F",
            padding: "8px",
            outline: "none",
            borderRadius: "10px",
            borderColor: errors?.movie_id ? "red" : provided.borderColor,
            border: errors?.movie_id ? "" : "",
          }),
        }}
        placeholder="Choose Title"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#261F30",
            primary: "#1A161F",
          },
        })}
        options={options}
        onChange={handleSelectChange}
      />
      <small className="text-red-500">{errors?.title?.message}</small>
      <Input
        register={{ ...register("episode", { required: true }) }}
        label="Episode"
        error={errors?.episode?.message}
        touchedField={touchedFields?.episode}
        type="text"
      />
      <Input
        register={{ ...register("video", { required: true }) }}
        label="Link Video"
        error={errors?.video?.message}
        touchedField={touchedFields?.video}
        type="text"
      />
      <div className="grid grid-cols-5 gap-4 ">
        <section className="notes col-span-2 grid gap-4 self-start">
          <div className="input flex flex-col gap-4">
            <label htmlFor="">Add Note</label>
            <input
              type="text"
              className="bg-secondary rounded-lg p-4 outline-none w-full"
              onChange={(e) => setNote(e.target.value)}
              value={note}
              placeholder="Add Notes"
            />
            <Button variant="secondary" type="button" onClick={addNote}>
              Tambah notes
            </Button>
          </div>
          <div className="notes-data flex flex-col gap-2 max-w-full break-all">
            {notes?.map((item, id) => (
              <span
                key={id}
                className="p-4 rounded-lg bg-secondary flex justify-between gap-2"
              >
                {item}{" "}
                <button type="button" onClick={() => deleteNote(id)}>
                  D
                </button>{" "}
              </span>
            ))}
          </div>
        </section>
        <section className="notes col-span-3 grid gap-4">
          <div className="input flex flex-col gap-4">
            <label htmlFor="">Image Link</label>
            <input
              placeholder="Input Image Link"
              type="text"
              className="bg-secondary rounded-lg p-4 outline-none w-full"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <Button variant="secondary" type="button" onClick={addImage}>
              Tambah Embed Image
            </Button>
          </div>
          <div className="notes-data flex flex-col gap-2 max-w-full break-all">
            <section className="columns-1 lg:columns-3 gap-4 [&>div:not(:first-child)]:mt-4 ">
              {images?.map((item, id) => (
                <div
                  className="relative [&>div:not(:first-child)]:hover:flex [&>div:not(:first-child)]:hover:justify-center [&>div:not(:first-child)]:hover:items-center "
                  key={id}
                >
                  <img
                    src={item}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg "
                  />
                  <div className="w-full h-full absolute bg-[#000000] bg-opacity-50 top-0 left-0  hidden">
                    <span
                      onClick={() => deleteImage(id)}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer"
                    >
                      D
                    </span>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default MovieEpisodeStore;
