import { MongoClient } from "mongodb";
import { json } from "@sveltejs/kit";  
import dotenv from "dotenv";

dotenv.config(); 

const mongobUri = process.env.MONGODB_URI as string;

const client = new MongoClient(mongobUri);

export async function POST({ request }) {
  try {
    const data = await request.json(); 

    
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("Students"); 

    
    const result = await collection.insertOne(data);

    
    return json({ message: "User created successfully!", result });
  } catch (err) {
    console.error("Error:", err);
    return json({ error: "Database connection failed" }, { status: 500 });
  } finally {
    await client.close();
  }
}