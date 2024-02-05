
import clientPromise  from '@/lib//mongodb';

export async function GET(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
 
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
 
        return new Response(JSON.stringify(movies), {
            status: 200,
        })
    } catch (e) {
        console.error(e);
    }
}
 
