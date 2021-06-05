import { Role } from './role';

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    jwtToken?: string;
    identificationNumber: string;
    address: string;
    sector: string;
    state: string;
    city: string;
    phone: string;

}