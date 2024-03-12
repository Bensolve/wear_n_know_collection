
import clientPromise  from '@/lib//mongodb';

export async function GET(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("wear_n_know");
 
        const movies = await db
            .collection("product")
            .find({})
            .sort({ metacritic: -1 })
            .limit(4)
            .toArray();
 
        return new Response(JSON.stringify(movies), {
            status: 200,
        })
    } catch (e) {
        console.error(e);
    }
}
 
export async function POST(request: Request) {
    
}

export async function PUT(request: Request) {
    
}

export async function PATCH(request: Request) {
    
}

export async function DELETE(request: Request) {
    
}