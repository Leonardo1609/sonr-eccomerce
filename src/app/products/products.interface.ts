export interface Product {
  id: number;
  name: string;
  category: number;
  oldPrice: number;
  price: number;
  productImage: string;
  littleDescription?: string;
  description?: string;
}

export interface CartProduct {
  id: number;
  productName: string;
  price: number;
  productImage: string;
}
