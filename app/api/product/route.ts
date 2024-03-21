
import clientPromise  from '@/lib//mongodb';


export async function GET(request: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("wear_n_know");
 
        const product = await db
            .collection("product")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
 
        return new Response(JSON.stringify(product), {
            status: 200,
        })
    } catch (e) {
        console.error(e);
    }
}
 
export async function POST(request: Request) {
    try {
        const { name, price , image } = await request.json();
        // Connect to the MongoDB client
        const client = await clientPromise;
        const db = client.db("wear_n_know");

        // Save the form data to the database
        await db.collection("product").insertOne({
            name,
            price,
            image,
        });

        // Return a success response
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        // Return an error response if something goes wrong
        return new Response(JSON.stringify({ success: false, error: e }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}



export async function PUT(request: Request) {
    
}

export async function PATCH(request: Request) {
    
}

export async function DELETE(request: Request) {
    
}