import { MongoClient } from "mongodb";
import { json } from "@sveltejs/kit";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI as string);

export async function GET() {
  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("Students");  // or whatever collection holds your data

    // Fetch students who are mentees (where isMentor is false)
    const mentees = await collection.find({ isMentor: false }).toArray();

    // Return mentee data as JSON
    return json(mentees);
  } catch (err) {
    console.error("Error fetching mentees:", err);
    return json({ error: "Database connection failed" }, { status: 500 });
  } finally {
    await client.close();
  }
}