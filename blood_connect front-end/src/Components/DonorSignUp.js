import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { SignUpSchema } from "../shemas";
import Alert from "@mui/material/Alert";
import { NavLink } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <NavLink color="inherit" to={"/"}>
        Blood Connect
      </NavLink>
      {new Date().getFullYear()}
       
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function DonorSignUp() {
  const [BloodGroup, setBloodGroup] = React.useState("");
  const [file, setfile] = React.useState("");

  const onhandleFileChange = (event) => {
    setfile(event.target.files[0]);
  };
  const onhandleChange = (event) => {
    setBloodGroup(event.target.value);
  };

  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    bloodGroup: "",
    password: "",
    address:""
  };

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: async (value, action) => {
        action.resetForm();
        setBloodGroup("");

        const formData = new FormData();
        formData.append("firstName", values.firstName);
        formData.append("lastName", values.lastName);
        formData.append("email", values.email);
        formData.append("contact", values.contact);
        formData.append("address", values.address);
        formData.append("bloodGroup", values.bloodGroup);
        formData.append("password", values.password);
        formData.append("file", file);

        try {
          const response = await fetch("http://localhost:3500/registerDoner", {
            method: "POST",
            body: formData,
          });

          const data = await response.json();

          // Handle the response data as needed.
          console.log(data);
        } catch (error) {
          console.error("Error submitting the form:", error);
        }
      },
    });

  const handleSelectChange = (event) => {
    onhandleChange(event);
    handleChange(event);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName ? (
                  <Alert severity="error">{errors.firstName}</Alert>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName ? (
                  <Alert severity="error">{errors.lastName}</Alert>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="address"
                  name="address"
                  autoComplete="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <Alert severity="error">{errors.email}</Alert>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contact"
                  label="Contact"
                  type="contact"
                  id="contact"
                  autoComplete="new-contact"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.contact && touched.contact ? (
                  <Alert severity="error">{errors.contact}</Alert>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <FormControl required fullWidth>
                  <InputLabel id="demo-simple-select-required-label">
                    BloodGroup
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={BloodGroup}
                    name="bloodGroup"
                    label="Blood Group"
                    onChange={handleSelectChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                  </Select>
                </FormControl>
                {errors.bloodGroup && touched.bloodGroup ? (
                  <Alert severity="error">{errors.bloodGroup}</Alert>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <label
                    htmlFor="file_input"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-600 focus:outline-none dark:bg-white-700 dark:border-gray-400 dark:placeholder-gray-600 py-4 px-3 leading-tight focus:border-blue-500 focus:bg-white"
                  >
                    {file!==""?file.name:"Upload BloodGroup Certificate *"}
                  </label>
                  <input
                    id="file_input"
                    type="file"
                    accept="application/pdf"
                    onChange={onhandleFileChange}
                    className="sr-only" // This class visually hides the original input
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <Alert severity="error">{errors.password}</Alert>
                ) : null}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex">
              <Grid item>
                <NavLink
                  to={"/DonorSignIn"}
                  variant="body2"
                  style={{
                    color: "#2196f3",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
