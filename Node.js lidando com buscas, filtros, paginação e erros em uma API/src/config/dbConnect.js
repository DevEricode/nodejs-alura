import mongoose from 'mongoose';

mongoose.connect(process.env.PASS_DB);

const db = mongoose.connection;

export default db;
