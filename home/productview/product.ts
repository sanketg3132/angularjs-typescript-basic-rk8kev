interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  sellingPrice: number;
  selectedQuantity: number;
  sellingCurrency: string;
  isActive: boolean;
}

export { Product };
