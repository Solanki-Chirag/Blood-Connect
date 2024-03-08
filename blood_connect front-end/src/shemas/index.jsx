import * as yup from "yup";

const getPasswordValidationError = () => {
    return "Your password must be 8 Passwords or more and contain at least one lowercase letter, one uppercase letter, and one symbol.";
};



const SignInSchema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Enter valid email.").required("Enter email."),
    password: yup.string()
        .required("Enter password")
        
});

const SignUpSchema = yup.object().shape({
    firstName: yup.string().max(20).required("Enter firstname."),
    lastName: yup.string().max(20).required("Enter lastname."),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Enter valid email.").required("Enter email."),
    contact: yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Enter Phone number."),
    bloodGroup: yup.string().required("Select BloodGroup."),
    password: yup.string()
        .required("Enter password.")
        .min(8, getPasswordValidationError())
        .matches(/[a-z]/, getPasswordValidationError())
        .matches(/[A-Z]/, getPasswordValidationError())
        .matches(/[^a-zA-Z0-9]/, getPasswordValidationError())
});

const HosSignInSchema = yup.object().shape({
    Hospital_id: yup.string().required("Enter Hospital id."),
    password: yup.string()
        .required("Enter password")
        
});

const HosSignUpSchema = yup.object().shape({
    Hospital_name: yup.string().max(20).required("Enter Hospital name."),
    Hospital_id: yup.string().max(20).required("Enter Hospital id."),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/,"Enter valid email.").required("Enter email."),
    contact: yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Enter phone number."),
    password: yup.string()
        .required("Enter password.")
        .min(8, getPasswordValidationError())
        .matches(/[a-z]/, getPasswordValidationError())
        .matches(/[A-Z]/, getPasswordValidationError())
        .matches(/[^a-zA-Z0-9]/, getPasswordValidationError())
});



export { SignInSchema, SignUpSchema,HosSignUpSchema,HosSignInSchema };
