export type BaseDummyJsonApi = {
  limit: number;
  skip: number;
  total: number;
}

export type DummyJsonProduct = {
  id: number,
  title: string;
  description: string;
  discountPercentage: number;
  category: string;
  price: number;
  rating: string;
  stock: string;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimension: {
    depth: number;
    height: number;
    width: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    comment: string
    date: string
    rating: number
    reviewerEmail: string
    reviewerName: string
  }
  returnPolicy: string;
  minimumOrderQuantity: 24;
  meta: {
    barcode: string;
    createdAt: string;
    qrCode: string
    updatedAt: string
  }
  images: string[]
  thumbnail: string;
}

export type DummyJsonProductProps = BaseDummyJsonApi & {
  products: DummyJsonProduct[]
}