import * as yup from "yup";

export const SignInSchema=yup.object({
    email:yup.string().email().required("Please enter your email."),
    password:yup.string().min(4).required("Please enter your password.")
})