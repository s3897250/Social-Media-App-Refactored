import axios from 'axios'

import { User, AuthUser } from "../utils/types/AxiosTypes";
import { userStateType } from '../utils/InitialState';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';


export async function createUser(user: userStateType) {
    const data = await axios.post<any>(`${API_URL}/api/user/create`, user);
    return data;
} 
