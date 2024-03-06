import * as yup from "yup";

const getCharacterValidationError = () => {
    return `Your password must be 8 characters or more, needs at least one LowerCase,one UpperCase and one Symbol.`;
};

export const SignInSchema = yup.object({
    email: yup.string().email().required("Please enter your email."),
    password: yup
        .string()
        .required("Please enter a password")
        .min(8, getCharacterValidationError())
        .matches(/[a-z]/, getCharacterValidationError())
        .matches(/[A-Z]/, getCharacterValidationError())
        .matches(/[^a-zA-Z0-9]/, getCharacterValidationError())
});

export const SignUpSchema = yup.object({
  email: yup.string().email().required("Please enter your email."),
  password: yup.string().min(4).required("Please enter your password."),
});
