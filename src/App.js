import { useState } from "react";
import { useForm } from "react-hook-form";
import "./app.css";

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: { category: [] },
  });
  const onSubmit = async (place) => {
    const { title, category, description, rating, location, image, images } =
      place;

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        description,
        rating,
        location,
        image,
        images,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("INVALID REGISTRATION");
      console.log("invalid registratoion");
    } else {
      window.alert("successful REGISTRATION");
      console.log("successful registratoion");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="register-form"
        id="register-form"
      >
        <div className="form-group">
          <label htmlFor="title">Title : </label>
          <input {...register("title")} type="text" placeholder="title" />
        </div>

        <div className="form-group">
          <h3>category : </h3>
          <div>
            <label htmlFor="title">Hills :</label>
            <input
              type="checkbox"
              value="hills"
              {...register("category")}
              className="mx-3"
            />
            <br />
            <label htmlFor="title">Water :</label>
            <input
              type="checkbox"
              value="water"
              {...register("category")}
              className="mx-3"
            />
            <br />
            <label htmlFor="title">Historical :</label>
            <input
              type="checkbox"
              value="historical"
              {...register("category")}
              className="mx-3"
            />
            <br />
            <label htmlFor="title">Famous :</label>
            <input
              type="checkbox"
              value="famous"
              {...register("category ")}
              className="mx-3"
            />
            <br />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="title">Description : </label>
          <input
            {...register("description")}
            type="text"
            placeholder="description "
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Rating : </label>
          <input
            {...register("rating")}
            type="number"
            placeholder="Raing(1-10)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Location Url : </label>
          <input {...register("location")} type="text" placeholder="location" />
        </div>
        <div className="form-group">
          <label htmlFor="title">Image Url : </label>
          <input {...register("image")} type="text" placeholder="main img " />
        </div>
        <div className="form-group">
          <label htmlFor="title">Images Url : </label>
          <input
            {...register("images")}
            type="text"
            placeholder="Imgs ( url1 , url2 , url3.. )"
          />
        </div>
        <div className="form-group form-button">
          <input type="submit" id="signup" className="form-submit" />
        </div>
      </form>
    </div>
  );
}
export default App;

