import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SigninFrom from "./SigninFrom";
import SignupFrom from "./SignupFrom";
import { useLocation, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
};

export default function AuthModel({ open, handleClose }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate =() => {
    const path = location.pathname ==="/signup"?"/signin":"/signup"

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-center font-bold text-3xl pb-20">
            create your account
          </h1>


          {location.pathname === "/signpu"?<SignupFrom/>:<SigninFrom/>}

          <h1 className='text-center py-4 font-semibold text-lg text-gray-500'>
          {location.pathname === "/signpu"? "Already have Account": "If you don't have account"}

          </h1>
          <Button fullWidth variant="outlined" onClick={handleNavigate} sx={{borderRadius:"29px", py:"15px"}}>

          {location.pathname === "/signpu"?"signin":"signup"}
          </Button>

        </Box>
      </Modal>
    </div>
  );
}
