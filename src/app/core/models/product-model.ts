export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  quantity?: number| undefined;
}

export interface User{
  name: string;
  password:string;
}