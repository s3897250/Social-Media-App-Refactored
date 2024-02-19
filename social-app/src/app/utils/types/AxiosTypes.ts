import React from "react";

// Axios Types ------------------------------

export type User = {
    username: string,
    password_hash: string,
    first_name: string,
    last_name: string,
    profile_pic: string,
    date_joined: string,
    followers: string,
    following: string,
    blocked: boolean
}
