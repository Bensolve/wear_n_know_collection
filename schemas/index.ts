import *  as  z from 'zod';

export const AddProductSchema = z.object({
    name: z.string(),
    price: z.string(),
    image: z.string()
})