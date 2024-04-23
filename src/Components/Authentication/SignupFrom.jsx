import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUser } from "../../Store/Auth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const currentyear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentyear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const mounths = [
  { value: 1, lable: "Junubary" },
  { value: 2, lable: "Feburary" },
  { value: 2, lable: "march" },
];
const SignupFrom = () => {
  const dispath = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const { day, month, year } = values.dateOfBirth;
      const dateOfBirth = `${year}-${month}-${day}`;
      values.dateOfBirth = dateOfBirth;
      dispath(registerUser(values));
      console.log("from value", values);
    },
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("dateOfBirth", {
      ...formik.values.dateOfBirth,
      [name]: event.target.value,
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid contianer spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            lable="Full Name"
            name="fullName"
            variant="outlined"
            size="large"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            lable="Email"
            name="email"
            variant="outlined"
            size="large"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            lable="Password"
            name="password"
            variant="outlined"
            size="large"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Date</InputLabel>
        <Select
          fullWidth
          onChange={handleDateChange("day")}
          onBlur={formik.handleBlur}
          name="day"
          value={formik.values.dateOfBirth.day}
        >
          {days.map((day) => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Mounth</InputLabel>
        <Select
          fullWidth
          onChange={handleDateChange("mounth")}
          onBlur={formik.handleBlur}
          name="mounth"
          value={formik.values.dateOfBirth.month}
        >
          {mounths.map((mounth) => (
            <MenuItem key={mounth.lable} value={mounth.value}>
              {mounth.lable}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <InputLabel>Year</InputLabel>
        <Select
          fullWidth
          onChange={handleDateChange("year")}
          onBlur={formik.handleBlur}
          name="year"
          value={formik.values.dateOfBirth.year}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>

        <Grid className="mt-20" item xs={12}>
          <Button
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            signup
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupFrom;
