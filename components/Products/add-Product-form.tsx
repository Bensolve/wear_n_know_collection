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
} from
    "@/components/ui/form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button"




export const AddProductForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof AddProductSchema>>(
        {
            resolver: zodResolver(AddProductSchema),
            defaultValues: {
                name: "",
                price: "",
                image: "",
            }

        }
    )



    const AddProduct = async (data: z.infer<typeof AddProductSchema>) => {
        // console.log(data)
        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Make sure to set appropriate headers
                },
                body: JSON.stringify(data), // Serialize the form data
            });

            if (response.ok) {
                router.push('admin/products/');
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
                <form
                    // onSubmit={form.handleSubmit(() => { })}
                    onSubmit={form.handleSubmit(AddProduct)}
                    className="space-y-6"
                >
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Nike"
                                            type="name"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="50"
                                            type="name"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ImageName</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="car.jpg"
                                            type="name"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}