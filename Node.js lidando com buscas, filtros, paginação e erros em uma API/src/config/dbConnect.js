import mongoose from "mongoose"

mongoose.connect(process.env.PASS_DB);

let db = mongoose.connection;

export default db;