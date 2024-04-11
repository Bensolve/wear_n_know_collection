'use server'
import { ObjectId } from 'mongodb';
import clientPromise from './mongodb'; // replace with your actual client file
import { revalidatePath } from 'next/cache';



export const deleteProduct = async (formData) => {
  const { _id } = Object.fromEntries(formData);
 

  try {
    const client = await clientPromise;
    const db = client.db("wear_n_know");
    
    // Convert string id to ObjectId
    // const objectId = new ObjectId(_id);

    // Delete the product by _id
    await db.collection("product").findByIdAndDelete(_id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
  //   await db.collection("product").deleteOne({ id });

  //   // Navigate back to the product page (or any other page)
  //   // router.push("/dashboard/products");
  // } catch (err) {
  //   console.log(err);
  //   throw new Error("Failed to delete product!");
  // }
};
