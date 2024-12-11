const { MongoClient } = require('mongodb');

const connURL = "mongodb+srv://yimingzhang2:recipesRUS@recipesrus.urf6l.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function getUser(email) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    const user = await collection.findOne({email: email});
    await client.close();
    return user;
}

module.exports = {
    getUser,
};