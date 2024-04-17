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
import { HosSignInSchema, CampSchema } from "../shemas"; // Assuming you have a schema for patient request data
import Alert from "@mui/material/Alert";
import { NavLink, useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Hospital_OrganizeCamp() {
  const history = useNavigate();

  let initialValues = {
    CampAddress: "",
    CampDays: "",
    CampDate: "",
  };

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CampSchema, 
      onSubmit: async (values, action) => {
        console.log(values);
        action.resetForm(initialValues);
        try {
          await fetch("http://localhost:3500/registerCamp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(values),
          });

          action.resetForm(initialValues); // Submission successful
          
            if(Response.ok){console.log("Camp register")}
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
            Camp Register Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              name="CampAddress"
              label="Camp Address"
              type="text"
              id="CampAddress"
              value={values.CampAddress}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.CampAddress && touched.CampAddress ? (
              <Alert severity="error">{errors.CampAddress}</Alert>
            ) : null}
            <TextField
              margin="normal"
              fullWidth
              name="CampDays"
              label="Camp Days"
              type="text"
              id="CampDays"
              value={values.CampDays}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.CampDays && touched.CampDays ? (
              <Alert severity="error">{errors.CampDays}</Alert>
            ) : null}

            <TextField
              margin="normal"
              fullWidth
              name="CampDate"
              type="date"
              id="CampDate"
              value={values.CampDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.CampDate && touched.CampDate ? (
              <Alert severity="error">{errors.CampDate}</Alert>
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
