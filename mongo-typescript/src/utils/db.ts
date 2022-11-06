import {MongoClient} from "mongodb";

const uri = process.env.MONGO_URL;
export const client = new MongoClient(uri || "");
export const db = "main";
export const connectToDb = async () => {
    await client.connect();
    console.log("Connected to MongoDB");
};