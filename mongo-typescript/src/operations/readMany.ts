import {client, db} from "../utils/db";


const readMany = async (collectionName: string) => {
    return await client.db(db).collection(collectionName).find().toArray();
};

export default readMany;