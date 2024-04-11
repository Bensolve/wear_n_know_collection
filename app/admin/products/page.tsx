import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Products/products.module.css";
import Search from "@/components/search/search";
import Pagination from "@/components/pagination/pagination";
import { fetchproducts } from "@/lib/data";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({   searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  }; }) => {

  const q = searchParams?.query || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchproducts(q, page);

  // ... rest of the component code remains the same



  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/admin/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
          <td>Name</td>
           
           <td>Price</td>
           <td>Action</td>
         </tr>
        </thead>
        <tbody>
        {products.map((product) =>  (
             <tr key={product._id.toString() as unknown as string}>

             <td>
               <div className={styles.product}>
                 <Image
                   src={product.image}
                   alt=""
                   width={40}
                   height={40}
                   className={styles.productImage}
                 />
                 {product.name}
               </div>
             </td>
            
             <td>${product.price}</td>
           
          
             <td>
               <div className={styles.buttons}>
                 <Link href={`/admin/products/${product._id}`}>
                   <button className={`${styles.button} ${styles.view}`}>
                     View
                   </button>
                 </Link>
                 <form >
                 <input type="hidden" name="id" value={product._id.toString()} />

                   <button className={`${styles.button} ${styles.delete}`}>
                     Delete
                   </button>
                 </form>
               </div>
             </td>
           </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;