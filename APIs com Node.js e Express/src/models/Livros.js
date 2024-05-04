import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publishing: { type: String },
    price: { type: Number },
    pages: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;