const e = require("express");
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const MongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://refaay:mado4ever@cluster0.imc7b.mongodb.net/shop"
  )
    .then((client) => {
        _db = client.db()
        cb()})
    .catch((err) => console.log(err));
};

const getDB = () => {
    if(_db) {
        return _db
    }

    console.log("no data stored")
}

exports.MongoClient = MongoConnect;

exports.getDB = getDB;


