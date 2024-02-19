export interface User {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    street: string;
    city: string;
    state?: string; // Optional property
    postalCode: string;
    suburb: string;
}
