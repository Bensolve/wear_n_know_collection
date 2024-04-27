import { Product } from "./models";
import { connectToDB } from "./utils";

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
      // console.log(products);
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchproducts = async () => {
 

  try {
    connectToDB();
   
    const products = await Product.find()
    //  console.log(products)
    return { products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

// export const getLatest = (async () => {
//   connectToDB();
//   const products = await Product.find({}).sort({ _id: -1 }).limit(6).lean()
//   return products 
// })

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

