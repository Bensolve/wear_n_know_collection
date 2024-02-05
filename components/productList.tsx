// components/MovieList.tsx
import Image from "next/image";
interface Product {
    // Define your product type here based on your actual data structure
    _id:string;
    name: string;
    price: string;
    image: string;
  }

  
  
  interface ProductProps {
    products: Product[];
  }
interface ProductProps {
    products: Array<{ name: string;  _id: string; price: string; image: string} & {}>;
  }
  const ProductList: React.FC<ProductProps> = ({ products }) => {
    return (
      <div className="bg-red-500">
        <h2 className="text-2xl">Top 10 Movies</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {/* Display product details here */}
              <Image
                 src={`/assets/images/${product.image}`}
                  alt={product.name} 
                  width={300}
                  height={500}
                 
                />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;
  