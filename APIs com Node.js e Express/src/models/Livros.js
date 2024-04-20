import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publishing: { type: String },
    price: { type: Number },
    pages: { type: Number }
});

const livro = mongoose.model("livros", livroSchema);

export default livro;