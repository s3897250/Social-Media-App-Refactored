import axios from 'axios'

import { User, AuthUser } from "../utils/types/AxiosTypes";
import { UserForm } from '../utils/types/FormTypes';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';


export async function createUser(user: UserForm) {
    const data = await axios.post<AuthUser>(`${API_URL}/api/users/create`, user);
    return data;
}
