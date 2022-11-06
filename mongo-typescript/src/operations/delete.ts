import {client, db} from "../utils/db";


const del = async (collectionName: string, id: string) => {
    await client.db(db).collection(collectionName).deleteOne({_id: id});
};

export default del;