"use client";
import { CardWrapper } from "./card-wrapper"
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

export const AddProductForm = () => {
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
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => { })}
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
                                    <FormLabel>Email </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="$50"
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
                                    <FormLabel>Image </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder=""
                                            type="file"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                </form>
            </Form>
        </CardWrapper>
    )
}