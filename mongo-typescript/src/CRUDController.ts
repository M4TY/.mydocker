import create from "./operations/create";
import del from "./operations/delete";
import {app} from "./index";
import express from "express";
import {client} from "./utils/db";
import readMany from "./operations/readMany";

const CRUDController = (collectionName: string) => {
    app.get(`/${collectionName}`, async (req: express.Request, res: express.Response) => {
        const entities = readMany(collectionName);
        res.send(entities);
    });

    app.post(`/${collectionName}`, async (req: express.Request, res: express.Response) => {
        const entity = req.body;
        const createdEntity = create(collectionName, entity);
        res.send(createdEntity);
    });

    app.delete(`/${collectionName}/:id`, async (req: express.Request, res: express.Response) => {
        const id = req.params.id;
        await del(collectionName, id);
        res.send("Deleted");
    });
}

export default CRUDController;