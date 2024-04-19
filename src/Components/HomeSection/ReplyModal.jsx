import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({ handleClose, open }) {
  const navigate = useNavigate();

  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectImage, setSelectedImage] = React.useState("");

  const handleSubmit = (values) => {
    console.log("handle sulblmit", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4,
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate(`/profile/${6}`)}
              className="cursor-pointer"
              alt="username"
              src="https://pbs.twimg.com/media/GLW-Ur1a4AA-17Y?format=jpg&name=small"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold">Abhishek kumar </span>
                  <span className="text-gray-600">@abhishek9773 . 2m</span>
                  <VerifiedIcon className="ml-2 w-4 h-5" />
                </div>
              </div>
              \
              <div className="mt-2">
                <div
                  onClick={() => navigate("/twit/${3}")}
                  className="cursor-pointer"
                >
                  <p>
                    {" "}
                    x-clone full stack project frontend with react and bacndend
                    with spring boot{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10`}>
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
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
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
        </Box>
      </Modal>
    </div>
  );
}
