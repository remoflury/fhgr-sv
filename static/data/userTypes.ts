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