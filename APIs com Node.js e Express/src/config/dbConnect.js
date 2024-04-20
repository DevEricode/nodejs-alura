import mongoose from "mongoose";



async function connectionDB () {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.zk7iuy3.mongodb.net/livraria?retryWrites=true&w=majority");

    return mongoose.connection;
};

export default connectionDB;