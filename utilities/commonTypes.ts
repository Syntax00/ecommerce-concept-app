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

type unaryFunction = (x: any) => void;
type binaryFunction = (x: any, y: any) => void;

interface IObjectKeys {
  [key: number]: string | number;
}