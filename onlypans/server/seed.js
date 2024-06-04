const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const_ = require("lodash");

async function main() {
    const uri = "mongodb+srv://gab:13461346@cluster0.sgrah9t.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        const productsCollection = client.db("onlypans-deliveries").collection("products");
        const categoriesCollection = client.db("onlypans-deliveries").collection("categories");

        productsCollection.drop();
        let categories = client.db("onlypans-deliveries").collection("categories");
        await categoriesCollection.insertMany(categories);

        let products = [];
        for (let i = 0; i < 10; i+=1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories)
            };
    }
    await productsCollection.insertMany(products);
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}