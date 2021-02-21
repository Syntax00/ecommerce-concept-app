interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
}
interface ButtomType {
  action: () => void;
  icon: string;
  id?: number;
  count?: number;
}

interface UserDataType {
  address: {
    city: string;
    number: number;
    street: string;
    zipcode: string;
    geolocation: object;
  };
  email: string;
  id?: number;
  name: { firstname: string; lastname: string };
  password: string;
  phone: string;
  username: string;
}

type unaryFunction = (x: any) => void;
type binaryFunction = (x: any, y: any) => void;

interface IObjectKeys {
  [key: number]: string | number;
}
