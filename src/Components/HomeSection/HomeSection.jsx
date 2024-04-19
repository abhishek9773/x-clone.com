import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const handleSubmit = (values) => {
    console.log("value ", values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-x1 font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://imgs.search.brave.com/5tgHQIyOvMT47XifWiwW0ty8fv8o-DG6SOGNvCi-Oo8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS8x/NTc5OWU0Mjc2MzEx/Nzc1NDYwM2RlOGRj/M2ZhYjZiMDcwMjEw/MTI3ZjBhMWQ3ZjM0/NDc1YjQyMzYyNjQ2/NDdlLzY4NzQ3NDcw/NzMzYTJmMmY2OTZk/NjcyZTczNjg2OTY1/NmM2NDczMmU2OTZm/MmY2ZTcwNmQyZjY0/NzQyZjQwNjE3NjYx/Njk2YzY5NzQ3OTJm/Nzk3NTcwMmU3Mzc2/NjczZjczNzQ3OTZj/NjUzZDY2NmY3MjJk/NzQ2ODY1MmQ2MjYx/NjQ2NzY1"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what wrong with india"
                  className={`border-none outline-none text-sl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#id9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "29px",
                      py: "8px",
                      px: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <TweetCard />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
