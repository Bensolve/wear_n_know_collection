"use server";
import path from "path";
import fs from "fs";

import { revalidatePath } from "next/cache";
import { Product} from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
// import bcrypt from "bcrypt";
// import { signIn } from "../auth";


export const addProduct = async (formData) => {
  const { title, price, stock, color, size, img } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const existingProduct = await Product.findOne({ img: img.name });
    if (existingProduct) {
      throw new Error('Product with the same image filename already exists');
    }
   
    const imageName = img.name;
    const imagePath = path.join(`./public/uploads/`, imageName);
    if (fs.existsSync(imagePath)) {
      throw new Error('Image with the same filename already exists');
    }
    const imageStream = fs.createWriteStream(imagePath);
    imageStream.write(Buffer.from(await img.arrayBuffer()));
    imageStream.end();
    
    const newProduct = new Product({
      title,
      price,
      stock,
      color,
      size,
      img: imageName,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateProduct = async (formData) => {
  const { id, title,  price, stock, color, size ,img} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      price,
      stock,
      color,
      size,
      img,
    };
    
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      throw new Error('Product not found');
    }

    if (existingProduct.img) {
      const imagePath = path.join(`./public/uploads/`, existingProduct.img);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    const imageName = img.name;
    const imagePath = path.join(`./public/uploads/`, imageName);
    const imageStream = fs.createWriteStream(imagePath);
    imageStream.write(Buffer.from(await img.arrayBuffer()));
    imageStream.end();

    updateFields.img = imageName;
    
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};


export const deleteProduct = async (formData) => {
  const { id, img } = Object.fromEntries(formData);
  console.log('Image:', img);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
     const imagePath = path.join(`./public/uploads/`, img);
     fs.unlinkSync(imagePath); 
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard");
};

