import clientPromise from './mongodb';
// import { Product } from './models'; // Import the Product model

export const fetchProducts = async (query: string, page?: number) => {
  const regex = new RegExp(query, "i"); // Create a case-insensitive regex pattern for search

  const ITEM_PER_PAGE = 2;

  try {
    const client = await clientPromise;
    const db = client.db("wear_n_know");

    const currentPage = page ?? 1; // Use 1 as default if page is undefined

    // Count the total number of products matching the search query
    const count = await db.collection("product").countDocuments({
      $or: [
        { name: regex },
        { description: regex },
      ],
    });

    // Fetch products based on the search query and pagination
    const products = await db
      .collection("product")
      .find({
        $or: [
          { name: regex },
          { description: regex },
        ],
      })
      .sort({ metacritic: -1 }) // Sort by whatever field you prefer
      .limit(ITEM_PER_PAGE) // Limit the number of results per page
      .skip((currentPage - 1) * ITEM_PER_PAGE) // Calculate the number of items to skip based on the current page
      .toArray();

    return { products, count };
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch products!"); // Throw a custom error message
  }
};


export const fetchLatestProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("wear_n_know");

    // Fetch the latest products based on a timestamp or date field
    const latestProducts = await db
      .collection("product")
      .find()
      .sort({ createdAt: -1 }) // Sort by the timestamp or date field in descending order to get the latest products first
      .toArray();

    return latestProducts;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch latest products!"); // Throw a custom error message
  }
};
