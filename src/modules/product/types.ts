export interface Product {
  type: string;
  name: string;
  description?: string;
  customDescription?: string;
  image: string;
  price: number;
  active: boolean;
  productIngredients?: {
    name: string;
    quantity: number;
  }[];
}

export interface CsvProduct {
  tipo: string;
  nombre: string;
  descripcion?: string;
  "descripcion personalizada"?: string;
  imagen: string;
  precio: string;
  activo: string;
  productIngredients?: {
    ingrediente: string;
    cantidad: string;
  }[];
}
