
// Dedicated for initializing states

export const userStateInitial = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    profile_pic: "",
    date_joined: "",
    followers: "",
    following: "",
    blocked: false,
    loggedIn: false,
}

export type userStateType = {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    profile_pic: string,
    date_joined: string,
    followers: string,
    following: string,
    blocked: boolean,
    loggedIn: boolean,
}


export const userStateErrorsType = {
    emailError: "",
    passwordError: "",
    first_nameError: "",
    last_nameError: "",
    validationSuccess: false
}
