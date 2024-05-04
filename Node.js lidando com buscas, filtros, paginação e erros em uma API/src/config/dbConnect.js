import mongoose from "mongoose";


async function connectionDB () {
    console.log(process.env.URI)
    mongoose.connect(process.env.URI);

    return mongoose.connection;
};

export default connectionDB;