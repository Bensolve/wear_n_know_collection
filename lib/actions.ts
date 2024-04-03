import clientPromise from './mongodb';

export const createProduct = async (productData: { name: string; price: number; image: string }) => {
  try {
    // Destructure productData to get the required fields
    const { name, price, image } = productData;

    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db("wear_n_know");

    // Save the form data to the 'product' collection in the database
    const result = await db.collection("product").insertOne({
      name,
      price,
      image,
      createdAt: new Date(), // Optional: Add a createdAt timestamp
    });

    // Check if the insertion was successful
    if (result.insertedCount === 1) {
      return { success: true, message: "Product created successfully", productId: result.insertedId };
    } else {
      throw new Error("Failed to create product");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Failed to create product"); // Throw a custom error message
  }
};
