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
import {  CampDataSchema } from "../shemas"; // Assuming you have a schema for patient request data
import Alert from "@mui/material/Alert";


const defaultTheme = createTheme();

export default function CampDonerData() {


  let initialValues = {
    CampId: "",
    Email: "",
    Liters: "",
  };

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CampDataSchema, 
      onSubmit: async (values, action) => {
        console.log(values);
        action.resetForm(initialValues);
        try {
          await fetch("http://localhost:3500/registerCampDonor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(values),
          });

          action.resetForm(initialValues); // Submission successful
          
            if(Response.ok){console.log("Donor Camp register")}
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
            Donor Register Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              name="CampId"
              label="Camp Id"
              type="text"
              id="CampId"
              value={values.CampId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.CampId && touched.CampId ? (
              <Alert severity="error">{errors.CampId}</Alert>
            ) : null}
            <TextField
              margin="normal"
              fullWidth
              name="Email"
              label="Email"
              type="text"
              id="Email"
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Email && touched.Email ? (
              <Alert severity="error">{errors.Email}</Alert>
            ) : null}

            <TextField
              margin="normal"
              fullWidth
              name="Liters"
              type="text"
              label="Liters"
              id="Liters"
              value={values.Liters}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Liters && touched.Liters ? (
              <Alert severity="error">{errors.Liters}</Alert>
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
      </Container>
    </ThemeProvider>
  );
}
