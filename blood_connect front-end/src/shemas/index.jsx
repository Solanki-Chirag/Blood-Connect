import * as yup from "yup";

const getPasswordValidationError = () => {
    return "Your password must be 8 Passwords or more and contain at least one lowercase letter, one uppercase letter, and one symbol.";
};



const SignInSchema = yup.object().shape({
    email: yup.string().email().required("Please enter your email."),
    password: yup.string()
        .required("Please enter a password")
        .min(8, getPasswordValidationError())
        .matches(/[a-z]/, getPasswordValidationError())
        .matches(/[A-Z]/, getPasswordValidationError())
        .matches(/[^a-zA-Z0-9]/, getPasswordValidationError())
});

const SignUpSchema = yup.object().shape({
    firstname: yup.string().max(20).required("Please enter your firstname."),
    lastname: yup.string().max(20).required("Please enter your lastname."),
    email: yup.string().email().required("Please enter your email."),
    contact: yup.string()
        .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
        .required("Please enter your phone number"),
    password: yup.string()
        .required("Please enter a password")
        .min(8, getPasswordValidationError())
        .matches(/[a-z]/, getPasswordValidationError())
        .matches(/[A-Z]/, getPasswordValidationError())
        .matches(/[^a-zA-Z0-9]/, getPasswordValidationError())
});

export { SignInSchema, SignUpSchema };
