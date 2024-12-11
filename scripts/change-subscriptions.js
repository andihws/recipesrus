const { MongoClient } = require('mongodb');

const connURL = "mongodb+srv://yimingzhang2:recipesRUS@recipesrus.urf6l.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function changeSubscription(email, isSubscribed) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    await collection.updateOne({email: email}, {$set: {"isSubscribed": isSubscribed}});
    await client.close();
}

module.exports = {
    changeSubscription,
};