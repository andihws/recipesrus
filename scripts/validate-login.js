const { MongoClient } = require('mongodb');
const connURL = "mongodb+srv://yimingzhang2:recipesRUS@recipesrus.urf6l.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function validateLogin(validUser) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    const docs = await collection.findOne({email: validUser.email}  );
    if (!docs) {
        return false;
    } else {    
        return docs.password === validUser.password;
    }
}

module.exports = {
    validateLogin,
};