const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;

async function main() {
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        const productsCollection = client.db("onlypans").collection("products");
        const categoriesCollection = client.db("onlypans").collection("categories");

        productsCollection.drop();
    }
}