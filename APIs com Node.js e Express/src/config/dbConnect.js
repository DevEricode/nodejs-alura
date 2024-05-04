import mongoose from "mongoose";


async function connectionDB () {
    mongoose.connect(process.env.URI);

    return mongoose.connection;
};

export default connectionDB;