import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { PatientSchema } from "../shemas"; // Assuming you have a schema for patient request data
import Alert from "@mui/material/Alert";
import { NavLink, useNavigate } from "react-router-dom";

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
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SendRequest() {
  const history = useNavigate();

  let initialValues = {
    patientName: "",
    patientId: "",
    bloodType: "",
    lastDate: "",
  };

  let {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: PatientSchema, // Assuming you have a validation schema for patient request data
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm(initialValues);
      try {
        await fetch("http://localhost:3500/sendRequest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(values),
        });

        action.resetForm(initialValues); // Submission successful
        history("/HospitalDashboard");
        console.log("Redirecting to dashboard...");
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    },
  });

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
            Patient Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="patientName"
              label="Patient Name"
              name="patientName"
              value={values.patientName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.patientName && touched.patientName ? (
              <Alert severity="error">{errors.patientName}</Alert>
            ) : null}

            <TextField
              margin="normal"
              fullWidth
              name="patientId"
              label="Patient ID"
              type="text"
              id="patientId"
              value={values.patientId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.patientId && touched.patientId ? (
              <Alert severity="error">{errors.patientId}</Alert>
            ) : null}

            <TextField
              margin="normal"
              fullWidth
              name="bloodType"
              label="Blood Type"
              type="text"
              id="bloodType"
              value={values.bloodType}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.bloodType && touched.bloodType ? (
              <Alert severity="error">{errors.bloodType}</Alert>
            ) : null}

           <TextField
              margin="normal"
              fullWidth
              name="lastDate"
              type="date"
              id="lastDate"
              value={values.lastDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastDate && touched.lastDate ? (
              <Alert severity="error">{errors.lastDate}</Alert>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
