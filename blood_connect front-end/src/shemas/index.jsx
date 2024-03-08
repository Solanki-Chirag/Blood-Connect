import * as yup from "yup";

const getPasswordValidationError = () => {
    return "Your password must be 8 Passwords or more and contain at least one lowercase letter, one uppercase letter, and one symbol.";
};



const SignInSchema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Enter valid email.").required("Please enter your email."),
    password: yup.string()
        .required("Please enter a password")
        .min(8, getPasswordValidationError())
        .matches(/[a-z]/, getPasswordValidationError())
        .matches(/[A-Z]/, getPasswordValidationError())
        .matches(/[^a-zA-Z0-9]/, getPasswordValidationError())
});

const SignUpSchema = yup.object().shape({
    firstName: yup.string().max(20).required("Please enter your firstname."),
    lastName: yup.string().max(20).required("Please enter your lastname."),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Enter valid email.").required("Please enter your email."),
    contact: yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Please enter your phone number"),
    bloodGroup: yup.string().required("Select BloodGroup."),
    password: yup.string()
        .required("Please enter a password")
        .min(8, getPasswordValidationError())
        .matches(/[a-z]/, getPasswordValidationError())
        .matches(/[A-Z]/, getPasswordValidationError())
        .matches(/[^a-zA-Z0-9]/, getPasswordValidationError())
});

export { SignInSchema, SignUpSchema };
