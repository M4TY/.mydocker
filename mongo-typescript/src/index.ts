import express from "express";
import { MongoClient } from "mongodb";
import {client} from "./utils/db";
import {connectToDb} from "./utils/db";
import CRUDController from "./CRUDController";

export const app = express();

CRUDController("users");
CRUDController("products");

app.get("/", async (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});


app.listen(3000, async () => {
    console.log("Server started on port 3000");
    await connectToDb();
});