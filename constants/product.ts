// Define the Product interface with only necessary properties
export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
}

// Define the list of products
const products: Product[] = [
  {
    id : 1,
    name: 'Basic',
    imageSrc: '/assets/images/prod1.jpg',
    price: '$35',
  },
  {
    id : 2,
    name: 'Basic',
    imageSrc: '/assets/images/prod2.jpg',
    price: '$35',
  },
  {
    id : 3,
    name: 'Basic',
    imageSrc: '/assets/images/prod3.jpg',
    price: '$35',
  },
  {
    id : 4,
    name: 'Basic',
    imageSrc: '/assets/images/prod4.jpg',
    price: '$35',
  },
  
];

export default products;
