import React from "react";

// Axios Types ------------------------------

export type User = {
    user_id: number,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    profile_pic: string,
    date_joined: string,
    followers: string,
    following: string,
    blocked: boolean
}

export type AuthUser = {
    user: User,
    jwtToken: string
}


