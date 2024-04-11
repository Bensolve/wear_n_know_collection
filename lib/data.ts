import clientPromise from "./mongodb";
 import { ObjectId } from 'mongodb';

export const fetchProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("wear_n_know");

    // Fetch all products
    const data = await db
      .collection("product")
      .find()
      .toArray();

    return data;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch products!"); // Throw a custom error message
  }
};

export const fetchProduct = async (_id: ObjectId) => {
  try {
    const client = await clientPromise;
    const db = client.db("wear_n_know");
    const product = await db.collection("product").findOne({ _id});
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};
