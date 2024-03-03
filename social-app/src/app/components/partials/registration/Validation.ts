
import { userStateType, userStateLoginType, userLoginStateErrorsInitial } from "../../../utils/InitialState"
import { UserForm } from "../../../utils/types/FormTypes"

export function Validation(user: userStateType) {

    // Initialize ErrorsObj with empty error messages and validationSuccess flag
    let ErrorsObj = {
        emailError: '',
        first_nameError: '',
        last_nameError: '',
        passwordError: '',
        validationSuccess: false,
    };

    if (!user.email || user.email.length === 0) {
        ErrorsObj.emailError = 'Email not provided!';
    } else if (user.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == null) {
        ErrorsObj.emailError = 'Email Formatting is incorrect';
    }

    if (!user.first_name || user.first_name.length === 0) {
        ErrorsObj.first_nameError = 'First name not provided!';
    } else if (user.first_name.match(/^[a-zA-Z]+$/) == null) {
        ErrorsObj.first_nameError = 'First name cannot contain symbols or numbers';
    }

    if (!user.last_name || user.last_name.length === 0) {
        ErrorsObj.last_nameError = 'Last name not provided!';
    } else if (user.last_name.match(/^[a-zA-Z]+$/) == null) {
        ErrorsObj.last_nameError = 'Last name cannot contain symbols or numbers';
    }

    if (!user.password || user.password.length === 0) {
        ErrorsObj.passwordError = 'Password not provided!';
    } else if (user.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/) == null) {
        ErrorsObj.passwordError = 'Passwords should contain 8 to 15 characters, one uppercase letter, one numeric digit, and one special character';
    }

    if (
        ErrorsObj.emailError === '' &&
        ErrorsObj.passwordError === '' &&
        ErrorsObj.first_nameError === '' &&
        ErrorsObj.last_nameError === ''
    ) {
        ErrorsObj.validationSuccess = true;
    }

    return ErrorsObj;
}


export function ValidationLogin(user: userStateLoginType) {

    let userLoginStateErrorsInitial = {
        emailError: "",
        passwordError: ""
    }

}