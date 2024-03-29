export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  export interface GetProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export type AddProduct = Partial<Product>;

 