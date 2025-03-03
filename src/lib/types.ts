import type { Component } from "svelte";

export type DifficultyProps = "easy" | "medium" | "advanced"

export type TaskProps = {
  title: string;
  description: string;
  points: number;
  difficulty: DifficultyProps,
  more?: {
    title: string,
    component: Component
  }
}

export type BaseDummyJsonApi = {
  limit: number;
  skip: number;
  total: number;
}

export type DummyJsonUsersApiResponse = BaseDummyJsonApi & {
  users: DummyJsonUser[]
}

export type DummyJsonUser = {
  address: Address;
  age: number;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  }
  birthDate: string;
  bloodType: string;
  company: {
    address: Address;
    departement: string;
    name: string;
    title: string
  }
  crypto: {
    coint: string;
    network: string;
    wallet: string
  }
  ein: string;
  email: string;
  eyeColor: string
  firstName: string
  gender: string;
  hair: {
    color: string;
    type: string;
  }
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: string
}

export type Address = {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
  postalCode: string;
  state:  string;
  stateCode: string
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

export type DummyJsonProductApiResponse = BaseDummyJsonApi & {
  products: DummyJsonProduct[]
}