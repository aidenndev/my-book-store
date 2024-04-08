import { Book } from "./book";

export  interface  User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
    borrowedBooks: Book[];
    createdAt: Date;
    isActive: boolean;
}