const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;

async function main() {
    const uri = "mongodb+srv://gab:13461346@cluster0.sgrah9t.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        const productsCollection = client.db("onlypans-deliveries").collection("products");
        const categoriesCollection = client.db("onlypans-deliveries").collection("categories");

        productsCollection.drop();
    }
};