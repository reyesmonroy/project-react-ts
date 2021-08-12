export interface ClientResponse {
  code: number;
  data: Client[];
}

export interface Client {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    tel: number;
    genre: string;
    birth_date: Date;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
  }