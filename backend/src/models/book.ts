export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    status: 'available' | 'borrowed';
}