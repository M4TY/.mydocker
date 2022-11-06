import {client, db} from "../utils/db";


const create = async (collectionName: string, data: any) => {
    await client.db(db).collection(collectionName).insertOne(data);
};

export default create;