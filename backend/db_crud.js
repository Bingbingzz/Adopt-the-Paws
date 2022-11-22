const {MongoClient} = require('mongodb');
require("dotenv").config();

const uri = process.env.mongodb_uri;
const client = new MongoClient(uri);

export async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to db.")
    } catch (e) {
        console.error(e);
    }
}

export async function addToDB(db, collection, doc) {
    try{
        const result = await client.db(db).collection(collection).insertOne(doc);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

export async function readAll(db, collection) {
    try{
        const cursor = await client.db(db).collection(collection).find();
        const data = cursor.toArray();
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function readOne(db, collection, query) {
    try{
        const data = await client.db(db).collection(collection).findOne(query);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export async function disconnectFromDB() {
    try {
        await client.close();
        console.log("Disconnect from db.")
    } catch (e) {
        console.error(e);
    }
}