import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { HosSignInSchema } from "../shemas";
import Alert from "@mui/material/Alert";

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
        BloodConnect
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Hospital_SignIn() {
  
    let initialValues = {
      Hospital_id: "",
      password: "",
    };
  
    let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
      useFormik({
        initialValues: initialValues,
        validationSchema: HosSignInSchema,
        onSubmit: async (value, action) => {
          console.log(values);
          action.resetForm();
          try {
            const response = await fetch("http://localhost:3500/Hospital_SignIn", {
              method: "POST",
              headers:{'Content-Type':'application/json'},
              credentials: 'include',
              body:JSON.stringify(values),
            });
  
            const data = await response.json();
  
            // Handle the response data as needed.
            console.log(data);
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Hospital_id"
              label="Hospital ID:"
              name="Hospital_id"
              value={values.Hospital_id}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Hospital_id && touched.Hospital_id ? (
              <Alert severity="error">{errors.Hospital_id}</Alert>
            ) : null}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <Alert severity="error">{errors.password}</Alert>
            ) : null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,  }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink
                  to={"/Hospital_forgot_password"}
                  variant="body2"
                  component="button"
                  style={{ color: '#2196f3', textDecoration: "underline",fontSize:"14px" }}
                >
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink
                  to={"/Hospital_SignUp"}
                  variant="body2"
                  component="button"
                  style={{ color: '#2196f3', textDecoration: "underline",fontSize:"14px" }}
                >
                  Don't have an account? Sign Up
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
