export type ID = string | number;

export type Category = {
    id: ID;
    name: string;
    description?: string;  // tidak wajib di isi / optional property
}
export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category; // alias type
    description?: string; // tidak wajib di isi / optional property
}
