const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
// let users = require('data/users.json');

// console.log(typeof users, " === ", users)

import { MongoClient } from 'mongodb';

let users = getAll();

export const usersRepo = {
    getAll: getAll,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: find,// x => users.find(x),
    create,
    update,
    delete: _delete
};

async function create(user) {

    // generate new user id
    // need to change to get num users in database db.collection.count()
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();


    console.log("running: ", user)
    // add and save user
    const client = await MongoClient.connect("mongodb+srv://mlee212:yiKDuuEfhVzfuy13@cluster0.7myuhnv.mongodb.net/?retryWrites=true&w=majority");

    const db = client.db("users");

    const yourCollection = db.collection("usernames");

    const result = await yourCollection.insertOne(user);
    
    client.close();


    // users.push(user);
    // saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save db.collection.findAndModify()
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save db.collection.deleteOne()
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

async function getAll() {
    
    const client = await MongoClient.connect("mongodb+srv://mlee212:yiKDuuEfhVzfuy13@cluster0.7myuhnv.mongodb.net/?retryWrites=true&w=majority");

    const db = client.db("users")

    const users = await db
        .collection("usernames")
        .find({})
        .toArray();

    return users
}
    
async function find(x) {
    let userlist = await getAll()
    
    // console.log("THE TYPEOF AHH: ", typeof userlist , " == ", userlist, userlist.find(x))
    return userlist.find(x)
}


async function saveData() {
    // fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));

    const client = await MongoClient.connect("mongodb+srv://mlee212:yiKDuuEfhVzfuy13@cluster0.7myuhnv.mongodb.net/?retryWrites=true&w=majority");

    const db = client.db("users");

    const yourCollection = db.collection("usernames");

    const result = await yourCollection.insert(users);

    // console.log(result);

    client.close();
}