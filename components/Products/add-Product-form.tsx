"use client";
import { CardWrapper } from "./card-wrapper";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AddProductSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { useRouter } from "next/navigation"; // Changed to next/router
import { useRef, useState } from "react";
import { getFile, uploadFile } from "@/lib/storage";
import { Button } from "@/components/ui/button";

export const AddProductForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof AddProductSchema>>({
        resolver: zodResolver(AddProductSchema),
        defaultValues: {
            name: "",
            price: "",
            image: "",
        },
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploaded, setUploaded] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = async () => {
        try {
            if (selectedFile) {
                const folder = "user/";
                const imagePath = await uploadFile(selectedFile, folder);
                const imageUrl = await getFile(imagePath);
                setUploaded(imageUrl); // Set the uploaded image URL
                return imageUrl; // Return the image URL
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };

    const AddProduct = async (data: z.infer<typeof AddProductSchema>) => {
        try {
            const imageUrl = await handleUpload(); // Upload file and get image URL
            
            if (imageUrl) {
                data.image = imageUrl; // Assign the uploaded image URL to the form data
            }

            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push('/');
            } else {
                console.error('Failed to add product:', await response.text());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(AddProduct)} className="space-y-6">
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Nike" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="50" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            ref={inputRef}
                                            onChange={(e) => {
                                                const file = e?.target?.files?.[0];
                                                if (file) {
                                                  setSelectedFile(file);
                                                }
                                              }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                    {uploaded && <img src={uploaded} className="my-5 max-w-[400px]" />}
                </form>
            </Form>
        </CardWrapper>
    );
};
