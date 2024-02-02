// Define the Product interface with only necessary properties
export interface Product {
  id?: number;
  name: string;
  slug: string;
  imageSrc: string;
  price: string;
}

// Define the list of products
const products: Product[] = [
  {
    id : 1,
    name: 'Basic',
    imageSrc: '/assets/images/prod1.jpg',
    slug: 'prod-1',
    price: '$35',
  },
  {
    id : 2,
    name: 'Basic',
    imageSrc: '/assets/images/prod2.jpg',
    slug: 'prod-2',
    price: '$35',
  },
  {
    id : 3,
    name: 'Basic',
    imageSrc: '/assets/images/prod3.jpg',
    slug: 'prod-3',
    price: '$35',
  },
  {
    id : 4,
    name: 'Basic',
    imageSrc: '/assets/images/prod4.jpg',
    slug: 'prod-4',
    price: '$35',
  },
  
];

export default products;
