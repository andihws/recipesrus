const { MongoClient } = require('mongodb');
const connURL = "mongodb+srv://yimingzhang2:recipesRUS@recipesrus.urf6l.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"


async function validateUser(validUser) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    if (await collection.countDocuments({email: validUser.email}) === 0) {
        await client.close();
        return true;
    } else {
        await client.close();
        return false;
    }
}

module.exports = {
    validateUser,
};